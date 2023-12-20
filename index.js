const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

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
    .then((response) => {
        if (response.shape === 'circle') {
            //create new shape
            const shape = new Circle(response.letters, response)
            // render() a a 
            fs.writeFile('./examples/logo.svg', render(), (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        }
    });