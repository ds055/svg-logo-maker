// Importing required files/functions
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");

// Used in prompts: checks to see if answer inputted for text is the requisite number of chars; if not, throw error
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

// Creates prompts, translates data to svg text, saves to working dir
const query = async() => {
  try{
    // creates data filled by prompt answers
    const data = await inquirer.prompt(questions)
    // Data passed forward for processing
    .then(async (data) => {
      // deconstruct data
      const {shapeRes, bgColRes, textColRes, charResp} = data;
      // call gen function, passing in prompt responses
      const logo = svgGen(shapeRes, bgColRes, textColRes, charResp);
      await writeToFile(logo);
    })
  } catch (err) {
    console.log(err)
    }
}

// Return svg text from arguments derived from input data 
const svgGen = (shape, bgcol, textcol, text) => {
  if (shape === "Circle") {
    const svg = new Circle(bgcol, textcol, text).render();
    return svg;
  }
  else if (shape === "Triangle") {
    const svg = new Triangle(bgcol, textcol, text).render();
    return svg;
  }
  else {
    const svg = new Square(bgcol, textcol, text).render();
    return svg;
  }
}

// Writes svg text to working dir
function writeToFile(logo) {
  fs.writeFile("logo.svg", logo, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg")
  });
}

// Function run from index.js to run app
class CLI {
  run() {
    query();
  }
}

// Export run function
module.exports = CLI;
