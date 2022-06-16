#!/usr/bin/env node

import Musagen from "../lib/apiwrapper.js";
import sl from "../lib/sl.js";
import { CONFIG_FOLDER, CONFIG_FILE } from "../lib/config.js";
import fs from "fs/promises";
import yargs from "yargs";
import inquirer from "inquirer";
import { hideBin } from "yargs/helpers";

const saveProject = async (project, outputFileAbsolutePath) => {
  const outputFileContent = await fs.readFile(outputFileAbsolutePath);
  const outputFileJson = JSON.parse(outputFileContent);
  outputFileJson.projects.push(project);
  await fs.writeFile(
    outputFileAbsolutePath,
    JSON.stringify(outputFileJson, null, 2)
  );
};

const formatSecondsToHuman = (seconds) => {
  if (!isFinite(seconds)) return "∞";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = Math.floor(seconds % 60);

  const hoursStr = hours > 0 ? `${hours}h ` : "";
  const minutesStr = minutes > 0 ? `${minutes}m ` : "";
  const secondsStr = secondsLeft >= 0 ? `${secondsLeft}s` : "";

  return `${hoursStr}${minutesStr}${secondsStr}`;
};

const generateProjects = async (inputFile, outputFile) => {
  const inputFileAbsolutePath = `${process.cwd()}/${inputFile}`;
  const outputFileAbsolutePath = `${process.cwd()}/${outputFile}`;
  let inputFileContent;
  try {
    inputFileContent = await fs.readFile(inputFileAbsolutePath);
  } catch (err) {
    sl.err(`The file '${inputFile}' doesn't exist.`);
    return;
  }
  try {
    const emptyProjects = {
      projects: [],
    };
    await fs.writeFile(
      outputFileAbsolutePath,
      JSON.stringify(emptyProjects, null, 2)
    );
  } catch (err) {
    sl.err(`Couldn't write on file '${outputFile}'`);
    return;
  }
  const words = inputFileContent
    .toString()
    .split("\n")
    .map((word) => word.trim())
    .filter((word) => word.length >= 1 && word.length <= 15); // Sanity check

  let apiKey;
  try {
    apiKey = await getApiKey();
  } catch {
    sl.err("No API key found. Set one with 'musag setkey'");
    return;
  }
  const musaApi = new Musagen(apiKey);

  const nProjects = words.length;
  let currentProject = 0;
  // A progress bar like this would look good:
  //  29.4% | ETA: 3.7s | Generating project "water"...
  process.stdout.write("\n");
  const startTime = Date.now();
  for (const word of words) {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(0);
    const progress = ((currentProject / nProjects) * 100).toFixed(1);
    const timeElapsed = (Date.now() - startTime) / 1000;

    const etaSeconds =
      (timeElapsed / currentProject) * (nProjects - currentProject);
    const elapsedFormatted = formatSecondsToHuman(timeElapsed);
    const etaFormatted = formatSecondsToHuman(etaSeconds);
    process.stdout.write(
      `${progress}% | Passed: ${elapsedFormatted} | ETA: ${etaFormatted} | Generating project related to "${word}"...\n`
    );
    const project = await musaApi.generateProject(word);
    await saveProject(project, outputFileAbsolutePath);
    currentProject++;
  }
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine(0);
  const elapsed = (Date.now() - startTime) / 1000;
  process.stdout.write(
    `[${formatSecondsToHuman(
      elapsed
    )}] Done! Stored projects on '${outputFile}'\n`
  );
};

const generateProjectFromWord = async (word) => {
  let apiKey;
  try {
    apiKey = await getApiKey();
  } catch {
    sl.err("No API key found. Set one with 'musag setkey'");
    return;
  }
  const musaApi = new Musagen(apiKey);
  const project = await musaApi.generateProject(word);
  console.log(project.title.text);
  console.log();
  console.log(project.description.text);
};

const hideApiKey = (str) => {
  return str.slice(0, 3) + "..." + str.slice(-4);
};

const setApiKey = async () => {
  sl.log("Setting API key...");
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

const purifyProjects = async (inputFile, outputFile) => {
  const inputFileAbsolutePath = `${process.cwd()}/${inputFile}`;
  const outputFileAbsolutePath = `${process.cwd()}/${outputFile}`;
  let inputFileContent;
  try {
    inputFileContent = await fs.readFile(inputFileAbsolutePath);
  } catch (err) {
    sl.err(`The file '${inputFile}' doesn't exist...`);
    return;
  }
  let purifiedProjects;
  try {
    const projects = JSON.parse(inputFileContent).projects;
    purifiedProjects = projects
      .filter((project) => {
        return (
          project.title.content_label === 0 &&
          project.description.content_label === 0
        );
      })
      .map((project) => {
        return {
          title: project.title.text,
          description: project.description.text,
        };
      });
  } catch {
    sl.err(`Couldn't parse file '${inputFile}'`);
    return;
  }
  const purifiedProjectsJson = JSON.stringify(
    { projects: purifiedProjects },
    null,
    2
  );
  try {
    await fs.writeFile(outputFileAbsolutePath, purifiedProjectsJson);
  } catch {
    sl.err(`Couldn't write on file '${outputFile}'`);
    return;
  }
};

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .command(
    "gen <input_file> <output_file>",
    "Generate projects for all words inside a file and output it in a json format",
    () => {},
    (argv) => generateProjects(argv.input_file, argv.output_file)
  )
  .example("$0 gen words.txt output.json")
  .command(
    "word <project_word>",
    "Display a project generated based on the word <project_word>",
    () => {},
    (argv) => generateProjectFromWord(argv.project_word)
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
    "Purify a json file of projects (potentially generated with $0 gen). this keeps only the projects that are labeled as safe and removes unnecessary fields",
    () => {},
    (argv) => purifyProjects(argv.input_file, argv.output_file)
  )
  .example(
    "$0 purify impure.json purified.json",
    "Get the projects from impure.json and store the purified projects on purified.json"
  )
  .demandCommand(1, "You must provide a command")
  .strict()
  .recommendCommands().argv;
