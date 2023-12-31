import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Nome',
        surname: 'Sobrenome',
        age: 99,
    }

    const mensagemTeste = 'Mensagem de teste'
    
    res.render('home', {user: user, mensagemTeste})
})

app.listen(3000, () => {
    console.log('App rodando em: http://localhost:3000');
})