const path = require('path')

const customPath = './pasta/arquivo.txt'

console.log('nome da pasta: ' + path.dirname(customPath))
console.log('nome do arquivo: ' + path.basename(customPath))
console.log('nome da extenção: ' + path.extname(customPath))
