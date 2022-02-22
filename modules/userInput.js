const inquirer = require('inquirer');

const userInput = () => {
	return inquirer.prompt(
		[
			{
				type: 'input',
				name: 'title',
				message: 'What is the projects title?',
				validate: titleInput => {
					if (titleInput) {
						return true;
					} else {
						console.log("Please enter title.")
					}
				}
			},
			{
				type: 'editor',
				name: 'description',
				message: 'Enter project description',
				validate: description => {
					if (description) {
						return true;
					} else {
						console.log('You did not enter description text. Relaunching editor.');
					}
				}
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
				type: 'confirm',
				name: 'installSection',
				message: 'Do you want to add installation information?',
			},
			{
				type: 'editor',
				name: 'installation',
				message: 'Enter the installation information.',
				validate: installation => {
					if (installation) {
						return true;
					} else {
						console.log('You did not enter installation information. Relaunching editor.');
					}
				},
				when(answers) {
					return answers.installSection;
				}
			},
			{
				type: 'editor',
				name: 'usage',
				message: 'Provide guidance how to use the application.',
				validate: usage => {
					if (usage) {
						return true;
					} else {
						console.log('You did not enter instructions how to use the app. Relaunching editor.');
					}
				},
			},
			{
				type: 'confirm',
				name: 'contributeSection',
				message: 'Do you want to add contribution guidelines?',
			},
			{
				type: 'editor',
				name: 'contribution',
				message: 'Enter the contribution instructions',
				validate: contribution => {
					if (contribution) {
						return true;
					} else {
						console.log('You did not enter contribution instructions. Relaunching editor.');
					}
				},
				when(answers) {
					return answers.contributionSection;
				}
			},
			{
				type: 'confirm',
				name: 'testingSection',
				message: 'Do you want to add testing instructions?',
			},
			{
				type: 'editor',
				name: 'testing',
				message: 'Enter the testing instructions',
				validate: testing => {
					if (testing) {
						return true;
					} else {
						console.log('You did not enter testing instructions. Relaunching editor.');
					}
				},
				when(answers) {
					return answers.testingSection;
				}
			},
			{
				type: 'input',
				name: 'ghuser',
				message: 'What is your GitHub handle?',
				validate: ghuser => {
					if (ghuser) {
						return true;
					} else {
						console.log('Please enter github handle.');
					}
				},
			},
			{
				type: 'input',
				name: 'email',
				message: 'What is your e-mail?',
				validate: email => {
					valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
					if (valid) {
						return true;
					} else {
						console.log(".  Please enter a valid email")
						return false;
					}
				}
			},
		]);
}

module.exports = {
	userInput
};