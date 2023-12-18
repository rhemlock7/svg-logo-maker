const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'letters',
            message: 'What letters do you want to include in your logo?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape should your logo be?',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the shape be?',
        },
    ])
    .then((data) => {
        fs.writeFile('logo.svg', JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg!')
        );
    });