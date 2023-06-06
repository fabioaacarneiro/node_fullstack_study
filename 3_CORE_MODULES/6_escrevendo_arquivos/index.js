const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile('./arquivo.txt', name, (err) => {
            res.writeHead(302, { Location: '/pacoca' })
            return res.end()
        })
    }

})

server.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
})