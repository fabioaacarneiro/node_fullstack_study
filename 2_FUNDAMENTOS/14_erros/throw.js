const x = '10'


// chegar se x é um número
if(!Number.isInteger(x)){
    throw new Error('o valor de x não é um numero inteiro')
}

console.log('continuando o codigo...')
