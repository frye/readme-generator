// Load our modules.
const {userInput} = require(`./modules/userInput`);
const {writeMarkdown} = require(`./modules/writeMarkdown`);
//Define the filename to write the markdown to.
const readmeFile = `./GeneratedREADME.md`;

// Using promises for inquirer and writeMarkdown (which uses writeFileSync)
const init = () => {
	userInput()
		.then((answers) => {
			writeMarkdown(readmeFile, answers);
		})
		.then(() => console.log(`Successfully created README.md`))
		.catch((err) => console.error(err));
};

init();