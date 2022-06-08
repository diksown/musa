import fs from "fs";
import chalk from "chalk";
import openai from "./apiConnect.js";
import getWordGenerator from "./wordGenerator.js";

let generateProjectFragment = async (word, fragmentType) => {
  let optionsSwitch = {
    titles: {
      // TODO: Set maxTokens to 6 and ask for only one title
      maxTokens: 32,
      prompt: `give me 3 cool, fun and quirky names about a project involving ${word}. display them in a numbered list (1. 2. 3., etc), one per line.\n`,
    },
    description: {
      maxTokens: 64,
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

let openAndAppend = (filePath, query, property = "data") => {
  // TODO: Check if path exists, if has `property` etc etc etc...
  let file = fs.readFileSync(filePath);
  let json = JSON.parse(file);
  // Check if query is an array
  if (Array.isArray(query)) {
    json[property].push(...query);
  } else {
    json[property].push(query);
  }
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
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

  openAndAppend("../logs/simpleLog.json", simpleEntry);
  openAndAppend("../logs/dirtyLog.json", dirtyEntry);
};

// wrapper function around openai api to log all results
// (because queries cost $, so I want to save them)
let openaiCompletionWrapper = async (model, data) => {
  const response = await openai.createCompletion(model, data);
  saveQuery(response);
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

let parseProject = (project) => {
  // Remove duplicated \n's, remove "'s
  let parsedTitles = project.titles.replace(/\n+/g, "\n").replace(/"/g, "");
  return {
    word: project.word,
    titles: parsedTitles,
    description: project.description,
  };
};

let saveProjects = async (projects) => {
  openAndAppend("../data/projects.json", projects);
};

function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Generate projects and automatically filter them
let generateBundleProjects = async (numberOfProjects = 5) => {
  if (numberOfProjects > 20) {
    console.log(
      chalk.bgRed.bold(
        `This will generate ${numberOfProjects} projects... Hit Ctrl+C to stop.`
      )
    );
    await sleep(5000);
  }
  console.log(chalk.blue("Generating projects..."));
  await sleep(1000);
  let wordGen = await getWordGenerator();
  let words = wordGen.getRandomizedWords();

  // Paralellized.
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

export default generateBundleProjects;
export { saveProjects };
