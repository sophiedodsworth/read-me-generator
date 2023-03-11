// function to generate markdown for README
function generateMarkdown(data) {


  
  // the below is what will generate the README file after the user has entered the required information
  
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents 

  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contrubuting](#contributing)
  * [Questions](#questions)
  
  ## License

  This project is covered under the following license: ${data.license}

  ## Installation

  ${data.install}

  ## Tests

  ${data.tests}

  ## Usage

  ${data.usage}

  ## Contributing

  This project involved the following contributors: ${data.contributing}

  ## Questions

  If you have any questions please feel free to reach out to me directly at ${data.email}. If you'd like to check out more of my work, you can do so here https://github.com/${data.profile}/

`;
}

// below code ensures that the generateMarkdown is exported 

module.exports = generateMarkdown;
