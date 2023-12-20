const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes')

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
            const shape = new Shapes.circle(response.letters, response.textColor, response.shapeColor)

            fs.writeFile('./examples/logo.svg', shape.createSVG(), (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        } else if (response.shape === 'square') {
            const shape = new Shapes.square(response.letters, response.textColor, response.shapeColor)

            fs.writeFile('./examples/logo.svg', shape.createSVG(), (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        } else if (response.shape === 'triangle') {
            const shape = new Shapes.triangle(response.letters, response.textColor, response.shapeColor)

            fs.writeFile('./examples/logo.svg', shape.createSVG(), (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        }
    });