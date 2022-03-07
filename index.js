// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "Project TITLE?:",
    "Project DESCRIPTION?:", 
    "Installation Instructions?:", 
    "Usage Information?:",
    "Contribution guidelines:",
    "Test Instructions?:",
    "Project LICENSE?:",
    "What is your GitHub USERNAME?:",
    "What is your GitHub URL?:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        "hi"
    ])
    .then((answers) => {
    // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}

// Function call to initialize app
init();
