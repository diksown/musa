#!/usr/bin/env node
import generateBundleProjects, { saveProjects } from "./apiUtils.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
//TODO: Make stuff look better using yargs
const argv = yargs(hideBin(process.argv)).argv;

let main = async () => {
  let numberOfProjects = argv.n;
  //check if numberOfProjects is a number
  if (Number.isInteger(numberOfProjects)) {
    let projects = await generateBundleProjects(numberOfProjects);
    console.log(chalk.green("Saving projects..."));
    saveProjects(projects);
  } else {
    console.log(chalk.red("Please provide a number as an argument."));
  }
};

main();
