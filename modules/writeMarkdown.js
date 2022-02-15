const {writeFileSync} = require('fs');

const generateMarkdown = (answers) => 
`# ${answers.title}

## Description
${answers.description}

## Installation

## How to use

## How to contribute

## How to test

## More information:
- Through Github: [@${answers.ghuser}](https://github.com/${answers.ghuser})
- Via Email: ${answers.email}
	`;

	
const writeMarkdown = (fileName, answers) => {
	return writeFileSync(fileName, generateMarkdown(answers));
}

module.exports = {
	writeMarkdown
}