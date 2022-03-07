const fs = require('fs');
const inquirer = require('inquirer');
const { stringify } = require('querystring');
const generateMarkdown = require('./utils/generateMarkdown');
require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Project TITLE?:",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project DESCRIPTION?:'
    },
    {
        type: 'input',
        name: 'installInstr',
        message: "Installation Instructions?:",
    },
    {
        type: 'input',
        name: 'usageInfo',
        message:  "Usage Information?:",
    },
    {
        type: 'input',
        name: 'contrGuidelines',
        message:  "Contribution guidelines:",
    },
    {
        type: 'input',
        name: 'testingInstructions',
        message: 'Test Instructions?:',
    },
    {
        type: 'list',
        name: 'license',
        message:   "Project LICENSE?:",
        choices: ['MIT License', 'Apache 2.0 License', 'GNU GPL v3', "None"],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: "What is your GitHub USERNAME?:",
    },
    {
        type: 'input',
        name: 'githubUrl',
        message: "What is your GitHub URL?:",
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email address for questions about this project?:'
    }
];

function writeToFile(fileName, data) {
    fs.mkdirSync(fileName, (err) => {
        if (err) {
            return console.error(err);
        }
    })
    fs.writeFile(`./${fileName}/${fileName}`, data, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`Your new README was succesfully written to the new ${fileName} directory!`)
    });
}

function init() {
    inquirer.prompt(questions).then((answers => {
        writeToFile(`${answers.title}.md`, generateMarkdown(answers));
    }))
}

init();
