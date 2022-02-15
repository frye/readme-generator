const {writeFileSync} = require('fs');

const generateMarkdown = (answers) => 
	`# ${answers.title}
	Some other content
	`;

const writeMarkdown = (fileName, answers) => {
	return writeFileSync(fileName, generateMarkdown(answers));
}

module.exports = {
	writeMarkdown
}