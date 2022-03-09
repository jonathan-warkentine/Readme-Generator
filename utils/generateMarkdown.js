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

  &nbsp;  

  ---
  ## Description:

  ${data.description}

  &nbsp;  

  ---
  ## Table of Contents:

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  &nbsp;  

  ---
  ## Installation:

  ${data.installInstr}

  &nbsp;  

  ---
  ## Usage:

  ${data.usageInfo}

  &nbsp;  

  ---
  ---
  #### *License:*

  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  &nbsp;  

  ---
  #### *How to Contribute:*

  ${data.contrGuidelines}

  &nbsp;  

  ---

  #### *Tests:*

  ${data.testingInstructions}

  &nbsp;  

  ---

  #### *Questions?*

  [Find me on GitHub: ${data.githubUsername}](https://github.com/${data.githubUsername})

  Or send an email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
