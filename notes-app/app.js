const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: () => {
    console.log("Removing the note!");
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    console.log("Listing out all notes!");
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note!");
  },
});

console.log(yargs.argv);

// const validator = require("validator");
// const getN = getNotes();
// console.log(getN);

// const bl = chalk.green(validator.isEmail("hamza.zaman40@gmail.com"));
// const gr = chalk.yellow(validator.isURL("http:/ajkhda"));

// console.log(bl);
// console.log(gr);

// console.log(chalk.bgRed("yellow"));
// console.log(chalk.bold("Hamza"));

// console.log(chalk.cyan.underline.bold("Hamzaaaaa"));
// console.log(chalk.red.underline.bold("Hamzaaaaa"));

// console.log(process.argv[2]);

// const add = require("./utils");

// // const fs = require("fs");

// // // fs.writeFileSync("notes.txt", "This file was created by Node.js!");

// // // To append text in that file

// // fs.appendFileSync("./notes.txt", " Appended text.");

// const sum = add(4, 2);

// console.log(sum);
