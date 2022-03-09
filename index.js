const fs = require('fs');
const inquirer = require('inquirer');
const stringify = require('querystring');
const generateMarkdown = require('./utils/generateMarkdown');
const { questions } = require('./lib/questions')


function writeToFile(projectTitle, data) {
    if (!fs.existsSync(`./dist/${projectTitle}`)){ //make sure we have a folder with the project name to save our resulting README to
        fs.mkdirSync(`./dist/${projectTitle}`, (err) => {
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

    inquirer.prompt( questions).then(answers => {
        writeToFile(answers.title, generateMarkdown(answers));
    })
}

init();
