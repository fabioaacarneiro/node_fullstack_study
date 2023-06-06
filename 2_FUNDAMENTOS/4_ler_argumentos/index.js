console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

for (i in args) {
    const nome = args[i].split('=')[1]
    console.log(nome)
}
