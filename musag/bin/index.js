#!/usr/bin/env node

import Musagen from "../utils.js";
import sl from "../sl.js";
import fs from "fs/promises";
import yargs from "yargs";
import inquirer from "inquirer";
import os from "os";
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

const generateProjectFromWord = (args) => {
  console.log("Generating project from word..." + args);
  // Get a word and display the project
  // if the word is not a valid word (too long?), throw an error
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
    const homedir = os.homedir();
    const configFolder = `${homedir}/.musag`;
    await fs.mkdir(configFolder);
    const configFile = `${configFolder}/config.json`;
    let configJson = {};
    try {
      const config = await fs.readFile(configFile);
      configJson = JSON.parse(config);
    } catch (err) {
      configJson = {};
    }
    configJson.apikey = apiKey;
    await fs.writeFile(configFile, JSON.stringify(configJson));
    sl.log(`Saved API key ${hideApiKey(apiKey)} to ${configFile}`);
  } else {
    sl.err("API key is invalid :( - Try again!");
  }
};

const purifyProjects = (args) => {
  console.log("Purifying projects..." + args);
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
    "gen",
    "Generate projects all words inside a file and output it to a json file",
    () => {},
    (argv) => generateProjects(posArgs(argv))
  )
  .example(
    "$0 gen words.txt output.json",
    "Generate projects from words.txt and store it on output.json in a detailed format"
  )
  .command(
    "word",
    "Display a project from a word",
    () => {},
    (argv) => generateProjectFromWord(posArgs(argv))
  )
  .example(
    "$0 word water",
    'Generate a project (title + description) using the word "water"'
  )
  .command(
    "setkey",
    "Prompt for a openAI api key",
    () => {},
    () => setApiKey()
  )
  .example("$0 setkey", "will ask for an api key")
  .command(
    "purify",
    "Purify a json file of projects (potentially generated with $0 gen). this maintains all the projects that have CFTitle and CFDescription equals to zero and removes unnecessary fields.",
    () => {},
    (argv) => purifyProjects(posArgs(argv))
  )
  .example(
    "$0 purify impure.json purified.json",
    "Get the projects from impure.json and store the purified projects on purified.json"
  )
  .demandCommand(1, "You must provide a command")
  .strict()
  .recommendCommands().argv;
