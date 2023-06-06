import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const basePath = path.join(path.dirname(__filename), 'templates')

const checkAuth = (req, res, next) => {
    req.authStatus = true

    if(req.authStatus){
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logao, faça o login para continuar')
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: http://localhost:${port}`)
})