const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer

  .prompt([

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a brief description of your project?",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: ['None','MIT','Mozilla', 'ISC', 'Perl', 'Unilicense']
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does someone else need to know about using your repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "How could someone else contribute to this repo?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What is the username for your GitHub profile?",
        name: "profile"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

]).then((information) => {

    console.log(information);

    fs.writeFile('README.md' . generateMarkdown(information),

    error =>{

        if (error) {

            console.log('Unable to generate README file - please input all the required information')
        }

        console.log('Your README file has been generated')

    }

)})