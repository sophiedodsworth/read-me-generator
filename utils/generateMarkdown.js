// function to generate markdown for README

function generateMarkdown(data) {

// if else statements that return the correct license badge based on the information the user inputs

let licenseBadge;

if (data.license === "MIT") {

  licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

} if (data.license === "Mozilla") {

  licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

} 

if (data.license === "ISC") {

  licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

}

if (data.license === "Perl") {

  licenseBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";

}

if (data.license === "Unlicense") {

  licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

}

if (data.license === "None") {

  licenseBadge = "";

}

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

  ${licenseBadge}

  This project is covered under the following license: ${data.license}

  ## Installation

  ${data.installation}

  ## Tests

  ${data.tests}

  ## Usage

  ${data.usage}

  ## Contributing

  Contributors to this project:
  ${data.contributing}

  ## Questions

  If you have any questions please feel free to reach out to me directly at ${data.email}. If you'd like to check out more of my work, you can do so here https://github.com/${data.profile}/

`;
}

// below code ensures that the generateMarkdown is exported 

module.exports = generateMarkdown;
