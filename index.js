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
        name: 'titleDescription',
        message: 'Title short desctiption: (Required)',

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
        name: 'how',
        message: 'How will someone use this? (Required)',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What does this project do? (Required)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'learning',
        message: 'Type in link/s for learning resources',

    },

];

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

// TODO: Create a function to initialize app
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
