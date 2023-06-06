import _ from 'lodash'

const arr = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8]

console.log(_.sortedUniq(arr))

// para poder usar pacotes que dependem de estar no local
// do projeto como lodash, mas estão instalados globalmente
// podemos criar um link no projeto para estes pacotes
// com o comando:
// npm link lodash
// podendo no lugar de 'lodash' ser qualquer outro pacote