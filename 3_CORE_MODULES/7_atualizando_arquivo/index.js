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

        if (name.includes(',')) {

            const names = name.split(',')

            for (const name of names) {
                const clearName = name.trim()
                const nameNewLine = clearName + '\r\n'
                fs.appendFile('./arquivo.txt', nameNewLine, (err) => {
                    if (err) throw err
                })
            }
        } else {
            const nameNewLine = name + '\r\n'

            fs.appendFile('./arquivo.txt', nameNewLine, (err) => {
                if (err) throw err

                res.writeHead(302, { Location: 'http://localhost:3000/' })
                return res.end()
            })
        }
    }

})

server.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
})