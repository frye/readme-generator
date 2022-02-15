const inquirer = require('inquirer');

const userInput = () => {
	return inquirer.prompt(
	[
		{
			type: 'input',
			name: 'title',
			message: 'What is the projects title?'
		},
		{
			type: 'input',
			name: 'description',
			message: 'Give short description of the project:'
		},
		{
			type: 'list',
			name: 'license',
			choices: [
				'MIT',
				'Mozilla',
				'Apache',
				'Eclipse',
				'GPL v2',
				'GPL v3'
			],
			message: 'Select the lincense for the project:'
		},
		{
			type: 'input',
			name: 'ghuser',
			message: 'What is your GitHub handle?'
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is your e-mail?'
		}
	]);
}

module.exports = {
	userInput
};