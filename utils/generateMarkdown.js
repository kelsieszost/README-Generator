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

  ## Questions
  For questions regarding this project, please email me at ${data.email}. To view more of my projects visit https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;


