import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const basePath = path.join(path.dirname(__filename), 'templates')

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    
    const name = req.body.name
    const age = req.body.age

    console.log(`O usuário ${name} tem ${age} anos`)
    
})

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
