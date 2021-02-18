const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title of my project',
      message: 'What is the title of my project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Description of this readMe',
    },
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'Table of Contents',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Installation of this project',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Usage',
    },
    {
      type: 'input',
      name: 'License',
      message: 'License',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Contributing',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Questions',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
