import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const basePath = path.join(path.dirname(__filename), '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    
    const name = req.body.name
    const age = req.body.age

    console.log(`O usuário ${name} tem ${age} anos`)
    
})

router.get('/:id', (req, res) => {    
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}.html`)
})

export default router