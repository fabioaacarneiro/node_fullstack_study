const os = require('os')

console.log(`processador: ${os.cpus()[0]['model']}`)
console.log(`quantidade de ram livre: ${os.freemem()}`)
console.log(`diretório home: ${os.homedir()}`)
console.log(`sitema operacional rodando: ${os.type()}`)
