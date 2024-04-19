#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colorfull Welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code With Danish - Word counter"));
console.log("=".repeat(60));
// prompt the user to enter a sentences
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentences",
    }
]);
// Trimming the sentences and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentences
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
