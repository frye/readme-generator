const { writeFileSync } = require('fs');

// Map the license to the relevant badge. This generates the whole license section
// which is then inserted to the template string.
const generateLicense = (license) => {
	console.log(license);
	const licArr = [
		{
			name: 'MIT',
			badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
		},
		{
			name: 'Mozilla',
			badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
		},
		{
			name: 'Apache',
			badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
		},
		{
			name: 'Eclipse',
			badge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
		},
		{
			name: 'GPL v2',
			badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
		},
		{
			name: 'GPL v3',
			badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
		}
	]
	let licenseBadge = '';
	licArr.forEach(licname => {
		if (licname.name === license) {
			licenseBadge = licname.badge;
		}
	})
	return `## License
${licenseBadge}	
	`
}

const generateSection = (title, section, answer) => {
	if (section) {
		return `## ${title}
${answer}
`} else {
		return ``;
	}
}

const generateMarkdown = (answers) =>
	`# ${answers.title}

## Description
${answers.description}

${generateLicense(answers.license)}

${generateSection('Installation', answers.installSection, answers.installation)}

## How to use
${answers.usage}

${generateSection('How to contribute', answers.contributeSection, answers.contribution)}

${generateSection('How to test', answers.testingSection, answers.testing)}

## More information:
- Through GitHub: [@${answers.ghuser}](https://github.com/${answers.ghuser})
- Via Email: ${answers.email}
	`;


const writeMarkdown = (fileName, answers) => {
	return writeFileSync(fileName, generateMarkdown(answers));
}

module.exports = {
	writeMarkdown
}