import express from 'express'
import { create } from 'express-handlebars'
import mysql, { MysqlError } from 'mysql'

const port = 3232
const app = express()
const hbs = create({})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

conn.connect((err:MysqlError) => {
    if (err) {
        console.log(err)
    }

    console.log('Conexão com o mysql efetuada com sucesso!')
})