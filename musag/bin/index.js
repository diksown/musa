#!/usr/bin/env node

import Musagen from "../utils.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

/*
Program outline:

Import the generator library

Implement -k

Implement -w
*/

const posArgs = (argv) => {
  return argv._.slice(2);
};

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .command(
    "gen",
    "generate projects all words of an file and output it to a json file",
    () => {},
    (argv) => {
      console.log(argv._ + " are the arguments for gen");
    }
  )
  .example(
    "$0 gen words.txt output.json",
    "generate projects from words.txt and output it to output.json"
  )
  .command(
    "word",
    "display a project from a word",
    () => {},
    (argv) => console.log(argv._)
  )
  .example("$0 word water", 'generate a project using the word "water"')
  .command("setkey", "prompt for a openAI api key")
  .example("$0 setkey", "will ask for an api key")
  .demandCommand(1, "You must provide a command")
  .recommendCommands().argv;

// async function main() {
//   const musagen = new Musagen(process.env.OPENAI_API_KEY);
//   const response = await musagen.generateProject("cub");
//   console.log(response);
// }

// main();
