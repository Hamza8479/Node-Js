const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json"); // it returns boolean type data  and like numbers
// const dataJSON = dataBuffer.toString(); // json data
// const data = JSON.parse(dataJSON); // convert json data to an object
// console.log(data.title);

const loadData = fs.readFileSync("1-json.json");
const dataJSON = loadData.toString();
const parseData = JSON.parse(dataJSON);
parseData.name = "Hamza";
parseData.age = 22;

const convertIntoJSON = JSON.stringify(parseData);
fs.writeFileSync("1-json.json", convertIntoJSON);

console.log(convertIntoJSON);
