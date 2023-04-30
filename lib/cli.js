const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

// Array to be used in prompts for user input
const questions = [
  {
    type: "list", 
    name: "shapeRes",
    message: "What shape should your logo be?",
    choices: ["Circle", "Triangle", "Square"]
  },
  {
    type: "input", 
    name: "bgColRes",
    message: "What background color should your logo have?"
  },
  {
    type: "input", 
    name: "textColRes",
    message: "What color should your logo's text be?"
  },
  {
    type: "input", 
    name: "charResp",
    message: "What 3 characters would you like to place on your logo?"
  }
]

const query = async() => {
  try{
    // creates data filled by prompt answers
    const data = await inquirer.prompt(questions)
    // Data is then used to populate readme file
    .then((data) => {
        // Cleans up user entries to ensure proper HTML is inserted
        data.installation = fixContent(data.installation, data.installContent)
        data.usage = fixContent(data.usage, data.usageContent)
        data.contribution = fixContent(data.contribution, data.contributionContent)
        data.test = fixContent(data.test, data.testContent)
        data.questInstruc = fixContent(data.questInstruc, data.questionContent)
        // create README
        writeToFile(data);
    })
} catch (err) {
    console.log(err)
}
}

// Creates svg file
function writeToFile(data) {
  // creates text from data to populate READ.ME
  // saves file to folder; confirms README creation in console
  fs.writeFile("logo.svg", mdText, (err) => {
      err ? console.log(err) : console.log("README Created!")
  });
}

class CLI {
  run() {

  }
}

module.exports = CLI;
