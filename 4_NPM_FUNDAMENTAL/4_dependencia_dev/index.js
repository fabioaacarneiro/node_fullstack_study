import _ from 'lodash'
import chalk from 'chalk' // chalk só funciona com mjs e import, pode usar "type": "module" 
const a = [1, 2, 3, 4, 5, 6, 7]
const b = [2, 4, 6, 8]

const diff = _.difference(a, b)

console.log(chalk.bgRed.bold(diff))