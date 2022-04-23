import fs from "fs";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let generateSentence = async (word) => {
  const prompt = `give me an ideia to a creative programming project about ${word}\n`;
  const maxSentenceSize = 128;
  return await getApiResponse(prompt, maxSentenceSize);
};

let generateTitle = async (word) => {
  const prompt = `give me 3 cool, fun and quirky names about a project involving ${word}. display them in a numbered list (1. 2. 3., etc), one per line.\n`;
  const maxTitleSize = 64;
  return await getApiResponse(prompt, maxTitleSize);
};

let generateProject = async (word) => {
  let title = await generateTitle(word);
  let sentence = await generateSentence(word);
  return {
    word: word,
    title: title,
    description: sentence,
  };
};

let showProject = (project) => {
  console.log(project.word + "\n");
  console.log(project.title + "\n");
  console.log(project.description + "\n");
  console.log("===========================");
};

let getAndShow = async (word) => {
  let project = await generateProject(word);
  showProject(project);
};

let openAndAppend = async (filePath, query) => {
  let file = await fs.promises.readFile(filePath);
  let json = JSON.parse(file);
  json.data.push(query);
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
  await saveQuery(response);
  return response;
};

let getApiResponse = async (sentence, maxTokens = 64) => {
  // TODO: check if the response is appropriate
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
// 1 - This text is sensitive. This means that the text could be talking about a sensitive topic, something political, religious, or talking about a protected class such as race or nationality.
// 2 - This text is unsafe. This means that the text contains profane language, prejudiced or hateful language, something that could be NSFW, or text that portrays certain groups/people in a harmful manner.
// (https://beta.openai.com/docs/engines/content-filter)
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

  return outputLabel;
};

let getCompleteApiResponse = async (sentence, maxTokens = 64) => {
  let response = await getApiResponse(sentence, maxTokens);
};

let main = async () => {};

main();
