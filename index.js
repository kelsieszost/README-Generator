// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

//Link to Readme generator 
const generateReadMe = require("./utils/generateMarkdown");



// Array of questions for user input
    const questions = () => { 
        return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter project title",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project title.");
                    return false;
                }
                }
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please describe your project.");
                    return false;
                }
                }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please explain your project installation process.");
                    return false;
                }
                }
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the project usage",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please describe your project usage.");
                    return false;
                }
                }
        },
        {
            type: "list",
            name: "license",
            message: "Which license applies to your project?",
            choices: ["MIT","Apache","GNU"],
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please choose one of the options.");
                    return false;
                }
                }
            },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to this project?",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list your contributors.");
                    return false;
                }
                }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false; 
                }
            }
    
        },
    ]);
}

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return console.log("Please enter your answer.");
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

questions()
// getting user answers 
.then(answers => {
    return generateReadMe(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
