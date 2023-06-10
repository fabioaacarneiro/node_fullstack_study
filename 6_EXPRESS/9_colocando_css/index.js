import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

import users from './users/index.js'

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

const __filename = fileURLToPath(import.meta.url)
const basePath = path.join(path.dirname(__filename), 'templates')

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: http://localhost:${port}`)
})
