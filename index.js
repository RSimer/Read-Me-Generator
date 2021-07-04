// TODO: Include packages needed for this application
const fs  = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input

inquirer
    .prompt([
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
          name: 'third-party',
      },
      {
          type: 'input',
          message: 'if you got stuck and had to use a tutorial, please include the links here',
          name: 'links',
      },
      {
          type: 'input',

      }
    ])
    .then((response) =>
        fs.writeFile('readme.md',`
## ${response.projectName}

##### Table of Contents

[Description] (#Description)
[Installation] (#Installation)
[Usage] (#Usage)
[Credits] (#Credits)



## Description
${response.description}

# What was learned
* ${response.learn1}
* ${response.learn2}
* ${response.learn3}


## Installation
${response.required}

## Usage
${response.usage}

## Credits
${response.collaborators}
${response.third-party}
${response.links}

## License


`
            , (err) =>
                err ? console.error(err) : console.log('Success!'))
    );


// inquirer.prompt([

    // {
    //     type:'input',
    //     message: 'whats the name of your project',
    //     name: 'projectName'
    // },
    // {
    //     type:'input',
    //     message: 'Give a brief description of your project',
    //     name: 'description'
    // },
    // {
    //     type:'input',
    //     message: 'What was your motivation for the project?',
    //     name: 'motivation'
    // },
    // {
    //     type:'input',
    //     message: 'What was something you learned (1 of 3)',
    //     name: 'learn1',
    // },
    // {
    //     type:'input',
    //     message: 'What was something you learned (2 of 3)',
    //     name: 'learn2',
    // },
    // {
    //     type:'input',
    //     message: 'What was something you learned (3 of 3)',
    //     name: 'learn3',
    // },
    // {
    //     type:'input',
    //     message: 'What installations are needed to complete this project (required)',
    //     name: 'required',
    // },
// ])
// .then((response) =>;'Readme.md', `
//             (err) =>
//                 err ? console.error(err) : console.log('Success!')
//     )
// );


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()
