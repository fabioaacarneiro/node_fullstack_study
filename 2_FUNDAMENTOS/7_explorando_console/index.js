const x = 10
const y = 'Algum texto'
const z = [1, 2]

// imprimir várias variáveis
console.log(x, y, z)

// contage, será crescente
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

const nome = "fabio"
const profissao = "Programador"

// substituíção de valores no console log
console.log("o nome nome dele é %s e ele é %s", nome, profissao)

// vai limpar o terminal depois de 2 segundos
setTimeout(() => {
    console.clear()
}, 2000)
