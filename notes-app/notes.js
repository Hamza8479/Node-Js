const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

// const getNotes = () => {
//   return "Here it is my Node.js notes in which I am gonna write down everything I learn";
// };

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNote = notes.filter((notes) => notes.title === title);
  const duplicateNotes = notes.find((notes) => notes.title === title);

  // if (duplicateNote.length === 0) {
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removeNotes = notes.filter((curr) => curr.title !== title);
  if (notes.length > removeNotes.length) {
    saveNotes(removeNotes);
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }

  // console.log(title);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  notes.forEach((curr) => {
    console.log(curr.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const n = notes.find((curr) => curr.title === title);
  if (n) {
    console.log(chalk.inverse(n.title));
    console.log(n.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// module.exports = getNotes;

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
