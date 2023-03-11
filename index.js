const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ['None', 'MIT','Mozilla', 'ISC', 'Perl', 'Unlicense']
    },
    {
        type: "input",
        message: "What should the user do if there are any installation dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does someone need to do if they wish to add to your repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who else contributed to this project?",
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

    const README = generateMarkdown(information)

    fs.writeFile("README.md", README, (err) => 
err? console.error(err) : console.log("Your README file has been successfully generated.")
    )
});