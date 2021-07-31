const validator = require("validator");
const getNotes = require("./notes");
const chalk = require("chalk");

const getN = getNotes();
console.log(getN);

const bl = chalk.green(validator.isEmail("hamza.zaman40@gmail.com"));
const gr = chalk.yellow(validator.isURL("http:/ajkhda"));

console.log(bl);
console.log(gr);

console.log(chalk.bgRed("yellow"));
console.log(chalk.bold("Hamza"));

console.log(chalk.cyan.underline.bold("Hamzaaaaa"));
console.log(chalk.red.underline.bold("Hamzaaaaa"));

// const add = require("./utils");

// // const fs = require("fs");

// // // fs.writeFileSync("notes.txt", "This file was created by Node.js!");

// // // To append text in that file

// // fs.appendFileSync("./notes.txt", " Appended text.");

// const sum = add(4, 2);

// console.log(sum);
