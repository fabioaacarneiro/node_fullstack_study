
import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome? ',
    },
    {
        name: 'idade',
        message: 'Qual a sua idade? '
    }
]).then((answers) => {
    if(!answers.nome || !answers.idade) {
        throw new Error('nome e idade são obrigatórios')
    }

    console.log(chalk.bgYellow.black(`Prazer em te conhecer ${answers.nome} você tem ${answers.idade} ?`))
}).catch((err) => console.log(err))
