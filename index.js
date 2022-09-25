// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
function promptQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'faveReptile',
            message: 'What is your favorite reptile?',
        }
        // {
        //     type: 'input',
        //     name: 'faveReptile',
        //     message: 'What is your favorite reptile?',
        // }
        // {
        //     type: 'input',
        //     name: 'faveReptile',
        //     message: 'What is your favorite reptile?',
        // }
        // {
        //     type: 'input',
        //     name: 'faveReptile',
        //     message: 'What is your favorite reptile?',
        // }
        // {
        //     type: 'input',
        //     name: 'faveReptile',
        //     message: 'What is your favorite reptile?',
        // }
        // {
        //     type: 'input',
        //     name: 'faveReptile',
        //     message: 'What is your favorite reptile?',
        // }
        // {
        //     type: 'input',
        //     name: 'faveReptile',
        //     message: 'What is your favorite reptile?',
        // }
    ]);

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {

        fs.writeToFile('README.md', 'Hello!')
    }

    writeToFile();
    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();
