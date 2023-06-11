import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Fabio',
        surname: 'Carneiro',
        age: 30,
    }

    const mensagemTeste = 'Mensagem de teste'
    
    res.render('home', {user: user, mensagemTeste})
})

app.listen(3000, () => {
    console.log('App rodando em: http://localhost:3000');
})