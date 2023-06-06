import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const basePath = path.join(path.dirname(__filename), 'templates')

app.get('/users/:id', (req, res) => {    
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: http://localhost:${port}`)
})