// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const fileName = `myReadMe.md`;

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter your name',
  },
    {
      type: 'input',
      name: 'titleProject',
      message: 'What is the title of my project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of this project',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Table of Contents',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation of this project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License',
      choices: ['MIT', 'Apache', 'BSD 3']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contributing',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Questions',
    },
  ]

 // .then((answers) => {
   // const generateMarkdown = generateMarkdown(answers);

  //});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, null, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) =>
      writeToFile(fileName, generateMarkdown(data)))
    .then(() => console.log('Succesfully created readMe'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
