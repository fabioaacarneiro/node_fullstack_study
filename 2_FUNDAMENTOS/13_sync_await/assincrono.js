const fs = require('fs')

console.log('inicio')

fs.writeFile('arquivo2.txt', 'oi', function(err){
    setTimeout(function(){
        console.log('arquivo criado')
    }, 1000)
})

console.log('fim')
