function renderLicenseBadge(license) {
  switch (license){
    case 'MIT License':
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
      break;
    case 'Apache 2.0 License':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'GNU GPL v3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    default: 
      return "NA";
  }
}

function renderLicenseLink(license) {
  switch (license){
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0 License':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default: 
      return "https://opensource.org/licenses";
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installInstr}

  ## Usage
  ${data.usageInfo}

  ## License
  ### [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## How to Contribute
  ${data.contrGuidelines}

  ## Tests
  ${data.testingInstructions}
  
  ## Questions
  [${data.githubUsername}](https://github.com/${data.githubUsername}) <- Submit an issue!
  Or send us an email: ${data.email}
`;
}

module.exports = generateMarkdown;
