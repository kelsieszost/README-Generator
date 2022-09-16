function renderLicenseBadge(license) {
  if (license !== "no license to display") {
    return `
    ![license-badge](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  } else {
    return " ";
  }
}

function renderLicenseLink(license) {
  if (license === "mit") {
    return `
    [${license}](https://choosealicense.com/licenses/mit/)
    `
  } else if (license === 'apache') {
    return `
    [${license}](https://choosealicense.com/licenses/apache-2.0/)
    `
  } else if (license === 'GNU') {
    return `
    [${license}](https://choosealicense.com/licenses/agpl-3.0/)
    `
  }
}

const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents

  * Installation
  * Usage
  * License
  * Contributing
  * Questions
  
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  This project is licensed with ${data.license}

  ## Contributing 
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## Questions
  For questions regarding this project, please email me at ${data.email}. To view more of my projects visit https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;


