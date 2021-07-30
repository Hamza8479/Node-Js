const validator = require("validator");
const getNotes = require("./notes");

const getN = getNotes();
console.log(getN);

console.log(validator.isEmail("hamza.zaman40@gmail.com"));
console.log(validator.isURL("http:/ajkhda"));

// const add = require("./utils");

// // const fs = require("fs");

// // // fs.writeFileSync("notes.txt", "This file was created by Node.js!");

// // // To append text in that file

// // fs.appendFileSync("./notes.txt", " Appended text.");

// const sum = add(4, 2);

// console.log(sum);
