// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const promptQuestions = [
    {

        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',

    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',

    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve? (Required)',

    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project? (Required)',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this? (Required)',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',

    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing. (Required)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app. (Required)',

    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

//     fs.writeFile('README.md', 'Hello!')
// // }writeToFile();
// function writeToFile(fileName, data) {

//     fs.writeFile(fileName, data, err => console.log(err))
// }

// writeToFile('README.md', "Hello!");


// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const init = () => {

    return inquirer.prompt(promptQuestions)
        .then(readmeData => {
            return readmeData;
        })
}

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
