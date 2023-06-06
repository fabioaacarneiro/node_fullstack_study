import http from 'http'
import url from 'url'

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')

    if (!name) {
        res.end(`<h1>Preencha o seu nome:</h1><form method="get"><input type="text" name="name" /><input type="submit" /></form>`)
    } else {
        res.end(`<h1>Bem-vindo ${name}</h1>`)
    }
})

server.listen(port, () => {
    log(`Servidor rodando em: http://localhost:${port}`)
})