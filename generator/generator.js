import fs from "fs";
import { Configuration, OpenAIApi } from "openai";
import shuffle from "knuth-shuffle-seeded";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let generateProjectFragment = async (word, fragmentType) => {
  let optionsSwitch = {
    titles: {
      maxTokens: 64,
      prompt: `give me 3 cool, fun and quirky names about a project involving ${word}. display them in a numbered list (1. 2. 3., etc), one per line.\n`,
    },
    description: {
      maxTokens: 128,
      prompt: `give me an ideia to a creative programming project about ${word}\n`,
    },
  };
  let option = optionsSwitch[fragmentType];
  if (option) {
    return await getApiResponse(option.prompt, option.maxTokens);
  }
};

let generateProject = async (word) => {
  // TODO: This can be optimized to save credits.
  // First, check titles and see the value of the content filter.
  // If it's safe, then we can generate the description.
  // Otherwise, we discard this project.
  let [titles, description] = await Promise.all([
    generateProjectFragment(word, "titles"),
    generateProjectFragment(word, "description"),
  ]);
  let [CFtitles, CFDescription] = await Promise.all([
    contentFilter(titles),
    contentFilter(description),
  ]);
  return {
    word: word,
    titles: titles,
    description: description,
    CFtitles: CFtitles,
    CFDescription: CFDescription,
  };
};

let openAndAppend = async (filePath, query, property = "data") => {
  let file = await fs.promises.readFile(filePath);
  let json = JSON.parse(file);
  // Check if query is an array
  if (Array.isArray(query)) {
    json[property].push(...query);
  } else {
    json[property].push(query);
  }
  await fs.promises.writeFile(filePath, JSON.stringify(json, null, 2));
};

let saveQuery = async (response) => {
  let config = JSON.parse(response.config.data);
  let rawData = response.data;

  let simpleEntry = {
    prompt: config.prompt,
    data: rawData.choices[0].text,
  };
  let dirtyEntry = {
    config: config,
    data: rawData,
  };

  await openAndAppend("../data/simpleLog.json", simpleEntry);
  await openAndAppend("../data/dirtyLog.json", dirtyEntry);
};

// wrapper function around openai api to log all results
// (because queries cost $, so I want to save them)
let openaiCompletionWrapper = async (model, data) => {
  const response = await openai.createCompletion(model, data);
  //await saveQuery(response);
  return response;
};

let getApiResponse = async (sentence, maxTokens = 64) => {
  const response = await openaiCompletionWrapper("text-davinci-002", {
    prompt: sentence,
    temperature: 1,
    max_tokens: maxTokens,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].text.trim();
};

// 0 - The text is safe.
// 1 - This text is sensitive.
// 2 - This text is unsafe.
let contentFilter = async (contentToClassify) => {
  const response = await openaiCompletionWrapper("content-filter-alpha", {
    prompt: "<|endoftext|>" + contentToClassify + "\n--\nLabel:",
    temperature: 0,
    max_tokens: 1,
    top_p: 0,
    logprobs: 10,
  });
  let outputLabel = response.data.choices[0].text;
  let toxicThreshold = -0.355;
  if (outputLabel == "2") {
    let logprobs = response.data.choices[0].logprobs.top_logprobs[0];
    if (logprobs["2"] < toxicThreshold) {
      let logprob0 = logprobs["0"];
      let logprob1 = logprobs["1"];
      if (logprob0 != null && logprob1 != null) {
        if (logprob0 >= logprob1) {
          outputLabel = "0";
        } else {
          outputLabel = "1";
        }
      } else if (logprob0 != null) {
        outputLabel = "0";
      } else if (logprob1 != null) {
        outputLabel = "1";
      }
    }
  }
  if (outputLabel != "0" && outputLabel != "1" && outputLabel != "2") {
    outputLabel = "2";
  }

  return parseInt(outputLabel);
};

class WordGenerator {
  async init() {
    let file = await fs.promises.readFile("../data/nounlist.csv", "utf8");
    let words = file.split("\n");
    words.sort();
    this.words = words;
  }

  getWords() {
    return this.words;
  }

  // TODO: Ensure reproducibility.
  getRandomWord() {
    let index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }

  getRandomizedWords() {
    let words = [...this.words];
    shuffle(words);
    return words;
  }
}

// Workaround to init the word generator
let getWordGenerator = async () => {
  let wordGenerator = new WordGenerator();
  await wordGenerator.init();
  return wordGenerator;
};

let parseProject = (project) => {
  // Remove duplicated \n's, remove "'s
  let parsedTitles = project.titles.replace(/\n+/g, "\n").replace(/'/g, "");
  return {
    word: project.word,
    titles: parsedTitles,
    description: project.description,
  };
};

let saveProjects = async (projects) => {
  openAndAppend("../data/projects.json", projects);
};

// Generate projects and automatically filter them
let generateBundleProjects = async (numberOfProjects = 5) => {
  let wordGen = await getWordGenerator();
  let words = wordGen.getRandomizedWords();
  // Paralellized.
  // TODO: Solve async problems with logging
  let projectPromiseList = [];
  for (let i = 0; i < numberOfProjects; i++) {
    let word = words[i];
    projectPromiseList.push(generateProject(word));
  }
  let projectList = await Promise.all(projectPromiseList);
  let filteredProjectList = projectList.filter((project) => {
    let threshold = 0; // Let's play it safe.
    return project.CFtitles <= threshold && project.CFDescription <= threshold;
  });
  let parsedProjects = filteredProjectList.map((project) => {
    return parseProject(project);
  });
  return parsedProjects;
};

let main = async () => {
  let numberOfProjects = 1;
  let projectList = await generateBundleProjects(numberOfProjects);
  console.log(projectList);
  saveProjects(projectList);
};

main();
