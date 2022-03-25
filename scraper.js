import fetch from "node-fetch";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// get a list of all english nouns
async function getNouns() {
  const nouns = await fetch(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json"
  );
  const nounsJson = await nouns.json();
  return nounsJson.nouns;
}

// create a sentence
function createSentence(noun) {
  return `give me inspiration to a programming project about ${noun}\n`;
}

async function getApiResponse(sentence) {
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: sentence,
    temperature: 1,
    max_tokens: 64,
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
    const response = await getApiResponse(createSentence(noun));
    console.log(noun);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

main();
