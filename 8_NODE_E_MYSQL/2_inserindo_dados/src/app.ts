import express, { Request, Response } from 'express'
import { create } from 'express-handlebars'
import mysql, { MysqlError } from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const port = 3232
const app = express()
const hbs = create({
    layoutsDir: 'src/views/layouts',
    partialsDir: 'src/views/partials',
})

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', 'src/views')
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    res.render('home')
})

app.post('/books/insertbooks', (req: Request, res: Response) => {
    const title: string = req.body.title
    const pageqty: number = req.body.pagesqty
    const sql: string = `INSERT INTO books (title, page) VALUES ('${title}', '${pageqty}')` 

    conn.query(sql, (err: MysqlError) => {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
})

conn.connect((err:MysqlError) => {
    if (err) {
        console.log(err)
    }

    console.log('Conexão com o mysql efetuada com sucesso!')
})

app.listen(port, () => {
    console.log(`O App pode ser acessado clicando aqui: http://localhost:${port}`)
})