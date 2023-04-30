// Importing required files/functions
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

// Checks to see if answer inputted for text is the requisite number of chars; if not, throw error
const confirmCharLim = async (input) => {
  if (input.length > 3) {
    throw new Error("Text must not exceed 3 characters.")
  }
  return true;
}

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
    message: "What 3 characters would you like to place on your logo?",
    validate: confirmCharLim
  }
]


const query = async() => {
  try{
    // creates data filled by prompt answers
    const data = await inquirer.prompt(questions)
    // Data is then used to populate readme file
    .then((data) => {
      //  TODO: call appropriate shape, input correct variables
      return console.log("Do Stuff")
    })
} catch (err) {
    console.log(err)
}
}

// TODO: Make print svg to directory
// Creates svg file
function writeToFile(data) {
  fs.writeFile("logo.svg", mdText, (err) => {
      err ? console.log(err) : console.log("README Created!")
  });
}

// Function run from index.js to run app
class CLI {
  run() {
    // TODO Call necessary functions for app start
    query();
  }
}

// Export run function
module.exports = CLI;
