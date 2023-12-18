const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Question',
        },
        {
            type: 'checkbox',
            name: 'stack',
            message: 'Question',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        },
        {
            type: 'list',
            name: 'contact',
            message: 'Question',
            choices: ['email', 'phone', 'telekinesis'],
        },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.svg`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });