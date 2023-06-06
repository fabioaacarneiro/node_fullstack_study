const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, (err, data) => {
                if (err) console.log(err)

                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html', (err, data) => {
                if (err) console.log(err)

                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
})