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