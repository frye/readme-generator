const inquirer = require('inquirer');

const userInput = () => {
	return inquirer.prompt(
	[
		{
			type: "input",
			name: "title",
			message: "What is the projects title?"
		}
	]);
}

module.exports = {
	userInput
};