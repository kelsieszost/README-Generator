// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


function generateReadMe(answers) {
    return `

    ## Project Title
    ${answers.projectTitle}
    
    ## Description
    ${answers.description}

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.license}

    `
}

// Array of questions for user input
    const questions = () => { 
        return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter project title"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process"
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the project usage"
        },
        {
            type: "input",
            name: "license",
            message: "Which license applies to your project?"
        }
    ]);
}

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
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
