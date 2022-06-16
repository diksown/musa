#!/usr/bin/env node

import Musagen from "../lib/apiwrapper.js";
import sl from "../lib/sl.js";
import { CONFIG_FOLDER, CONFIG_FILE } from "../lib/config.js";
import fs from "fs/promises";
import yargs from "yargs";
import inquirer from "inquirer";
import { hideBin } from "yargs/helpers";

const posArgs = (argv) => {
  return argv._.slice(1);
};

const generateProjects = (args) => {
  console.log("Generating projects..." + args);
  // Check if number of arguments is correct
  // Get a list of words as a input txt and a output json name
  // Check if the input exists
  // Generate projects while displaying a progress bar
};

const generateProjectFromWord = async (word) => {
  let apiKey;
  try {
    apiKey = await getApiKey();
  } catch {
    sl.err("No API key found. Set one with 'musag setapikey'");
    return;
  }
  const musaApi = new Musagen(apiKey);
  const project = await musaApi.generateProject(word);
  console.log(project.title);
  console.log();
  console.log(project.description);
};

const hideApiKey = (str) => {
  return str.slice(0, 3) + "..." + str.slice(-4);
};

const setApiKey = async () => {
  console.log("Setting API key...");
  const userInput = await inquirer.prompt({
    type: "input",
    name: "apikey",
    message: "Insert your OpenAI API key:",
  });
  const apiKey = userInput.apikey.trim();
  const musaApi = new Musagen(apiKey);
  const apiKeyValidity = await musaApi.checkApiKey();
  if (apiKeyValidity) {
    sl.ok("API key is valid! Wohoo!");
    await fs.mkdir(CONFIG_FOLDER, { recursive: true });
    let configJson = {};
    try {
      const config = await fs.readFile(CONFIG_FILE);
      configJson = JSON.parse(config);
    } catch (err) {
      configJson = {};
    }
    configJson.apikey = apiKey;
    await fs.writeFile(CONFIG_FILE, JSON.stringify(configJson));
    sl.log(`Saved API key ${hideApiKey(apiKey)} to ${CONFIG_FILE}`);
  } else {
    sl.err("API key is invalid :( - Try again!");
  }
};

const getApiKey = async () => {
  try {
    const config = await fs.readFile(CONFIG_FILE);
    const configJson = JSON.parse(config);
    return configJson.apikey;
  } catch (err) {
    throw "No API key found.";
  }
};

const purifyProjects = (inputFile, outputFile) => {
  console.log("Purifying projects...");
  // Get a input json and a output json name
  // Check if the input json exists
  // Try to parse the json
  // Output the purified json to the output json
  // If everything goes well, print a success message
  // Otherwise, print an error message
};

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .command(
    "gen <input_file> <output_file>",
    "Generate projects for all words inside a file and output it in a json format",
    () => {},
    (argv) => generateProjects(posArgs(argv))
  )
  .example("$0 gen words.txt output.json")
  .command(
    "word <project_word>",
    "Display a project generated based on the word <project_word>",
    () => {},
    (argv) => generateProjectFromWord(argv.word)
  )
  .example(
    "$0 word water",
    'Generate a project (title + description) using the word "water"'
  )
  .command(
    "setkey",
    "Prompt for a openAI API key",
    () => {},
    () => setApiKey()
  )
  .example("$0 setkey")
  .command(
    "purify <input_file> <output_file>",
    "Purify a json file of projects (potentially generated with $0 gen). this keeps only the projects that have CFTitle and CFDescription equals to zero and removes unnecessary fields",
    () => {},
    (argv) => purifyProjects(argv.inputFile, argv.outputFile)
  )
  .example(
    "$0 purify impure.json purified.json",
    "Get the projects from impure.json and store the purified projects on purified.json"
  )
  .demandCommand(1, "You must provide a command")
  .strict()
  .recommendCommands().argv;
