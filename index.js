// TODO: Include packages needed for this application
const fs  = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input


  

const questions = [
        {
            type: 'input',
            message: 'What is the name of your project',
            name: 'projectName',
        },
      {
          type: 'input',
          message: 'Describe your project',
          name: 'description',
      },
      {
          type: 'input',
          message: 'What was something you learned (1 of 3)',
          name: 'learn1',
      },
      {
          type: 'input',
          message: 'What was something you learned (2 of 3)',
          name: 'learn2',
      },
      {
          type: 'input',
          message: 'What was something you learned (3 of 3)',
          name: 'learn 3'
      },
      {
          type: 'input',
          message: 'What installations were needed to complete this project?',
          name: 'required',
      },
      {
          type: 'input',
          message: 'How do you use this application that you have poured your heart and soul into',
          name: 'usage',
      },
      {
          type: 'input',
          message: 'Put in any collaborators who helped you',
          name: 'collaborators',
      },
      {
          type: 'input',
          message: 'Put in any third-party-assets that you used',
          name: 'thirdParty',
      },
      {
          type: 'input',
          message: 'if you got stuck and had to use a tutorial, please include the links here',
          name: 'links',
      },
      {
          type: 'list',
          message: 'What kind of license should your project have',
          name: 'license',
          choices: ['MIT','APACHE2.0','GPL3.0','BSD3','none'],
      },
    ]
  

function writeToFile(fileName,response){
    return fs.writeFileSync(path.join(process.cwd(),fileName),response)
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses =>{
        console.log("generating readme.md");
        writeToFile("GeneratedREADME.md",generateMarkdown({
            ...inquirerResponses
        }))
    })
}

// Function call to initialize app
init()
