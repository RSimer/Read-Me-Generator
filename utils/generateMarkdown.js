// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none')
  {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none')
  {
    return `\n* [License](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none')
  {
    return `## License
    
this project is licensed under ${license} license`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
## ${response.projectName}
${renderLicenseBadge(response.license)}

##### Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(response.license)}



## Description
${response.description}

# What was learned
* ${response.learn1}
* ${response.learn2}
* ${response.learn3}


## Installation
${response.required}

## Usage
${response.usage}

## Credits
* ${response.collaborators}
* ${response.thirdParty}
* ${response.links}


${renderLicenseSection(response.license)}

`

;
}

module.exports = generateMarkdown;
