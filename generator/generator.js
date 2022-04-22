import fs from "fs";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// create a sentence
let createSentence = async (noun) => {
  const prompt = `give me inspiration to a code project about ${noun}\n`;
  const maxSentenceSize = 128;
  return await getApiResponse(prompt, maxSentenceSize);
};

let createTitle = async (noun) => {
  const prompt = `give me 3 cool and quirky names about a project involving ${noun}\n`;
  const maxTitleSize = 64;
  return await getApiResponse(prompt, maxTitleSize);
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

async function main() {
  try {
    // TODO: Improve this to be more dynamic
    let noun = "waves";
    const title = await createTitle(noun);
    const sentence = await createSentence(noun);
    console.log(noun);
    console.log();
    console.log(title);
    console.log();
    console.log(sentence);
  } catch (err) {
    console.log(err);
  }
}

main();
