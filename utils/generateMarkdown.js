
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// Function that returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.titleDescription}
  
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Installation](#installation)
  * [How is this project used?](#how)
  * [What this project does](#What)
  * [Learning Resources](#learning)
  

  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## [How is this installed?](#installation)
  ${data.installation}

  ## [How is this project used?](#how)
  ${data.how}
  
  ## [What this project does](#What)
  ${data.what}

  ## [Learning Resources Links](#learning)
  ${data.learning}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername}) or
  [Email: ${data.email}](mailto:${data.email})
`;
}

// Function to return a message if user doesn't want contributors
function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

module.exports = generateMarkdown;
