const fs = require('fs');
const inquirer = require('inquirer');
const stringify = require('querystring');
const generateMarkdown = require('./utils/generateMarkdown');



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
        name: 'email',
        message: 'What is a good email address for questions about this project?:'
    }
];

function writeToFile(projectTitle, data) {
    if (!fs.existsSync(`./dir/${projectTitle}`)){ //make sure we have a folder with the project name to save our resulting README to
        fs.mkdirSync(`./dir/${projectTitle}`, (err) => {
            if (err) {
                return console.error(err);
            }
        })
    }
    
    fs.writeFile(`./dist/${projectTitle}/README.md`, data, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`Your new README was succesfully written to the new '${projectTitle}' directory (within the the 'dist' directory)!`)
    });
}

function init() {
    if (!fs.existsSync('./dist')){ //make sure we have a 'dist' folder to save our resulting README to
        fs.mkdirSync(`./dist`, (err) => {
            if (err) {
                return console.error(err);
            }
        })
    }

    inquirer.prompt( questions).then((answers => {
        writeToFile(answers.title, generateMarkdown(answers));
    }))
}

init();
