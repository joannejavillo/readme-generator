// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.titleProject}
![License](https://img.shields.io/badge/License-${data.license}-purple)
# Description 
${data.description}
# Table of Contents 
${data.tableOfContents}
  ## [Description](#description)
  ## [Installation](#installation)
  ## [Usage](#usage)
  ## [License](#license)
  ## [Contributing](#contributing)
  ## [Test](#tests)
  ## [Questions](#questions)
# Installation
${data.installation}
# Usage 
${data.usage}
# License
${data.license}
# Contributing
${data.contributing}
# Test
${data.tests}
# Questions
${data.questions}
If you have any questions you can contact me at jo_anne.javillo@outlook.com or you can visit my gitHub page: (https://github.com/joannejavillo)
`;
}

module.exports = generateMarkdown;
