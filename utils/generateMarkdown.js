//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
`;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `* [License](*license)\n`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  This project is licensed under the ${license} license.
  `;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  //Put down all of the readme info. Pass in responses from inquirer (user response)
  return `# ${response.title}
  ${renderLicenseBadge(response.license)}
## Description
${response.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
${renderLicenseLink(response.license)}
## Installation
${response.installation}
## Usage
${response.usage}
## Contribution-Guidelines
${response.contribution}
## Test-Instructions
${response.test}
## Questions
If you have any questions regarding this project please contact either on GitHub or by Email below.
GitHub: ${response.github}
Email: ${response.email}

${renderLicenseSection(response.license)}
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you’d prefer.
## Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}
module.exports = generateMarkdown;
