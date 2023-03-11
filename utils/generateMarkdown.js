// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description

  ${data.description}

  ## Table of Contents 

  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contrubuting](#contributing)
  * [Questions](#questions)
  
  ## License

  ${data.license}

  ## Installation

  ${data.install}

  ## Tests

  ${data.tests}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Questions

  ${data.profile}
  ${data.email}

`;
}

module.exports = generateMarkdown;
