import fs from "fs";
import fetch from "node-fetch";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// get a list of all english nouns
async function getNouns() {
  const nouns = await fs.promises.readFile("./nounsorder.txt", "utf8");
  const nounsList = nouns.split("\n").map((noun) => noun.trim());
  return nounsList;
}

// create a sentence
async function createSentence(noun) {
  const prompt = `give me inspiration to a code project about ${noun}\n`;
  const maxSentenceSize = 128;
  return await getApiResponse(prompt, maxSentenceSize);
}

async function createTitle(noun) {
  const prompt = `give me 3 funny and creative names about a project involving ${noun}\n`;
  const maxTitleSize = 64;
  return await getApiResponse(prompt, maxTitleSize);
}

async function getApiResponse(sentence, maxTokens = 64) {
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: sentence,
    temperature: 1,
    max_tokens: maxTokens,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].text.trim();
}

async function main() {
  try {
    const nouns = await getNouns();
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
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
