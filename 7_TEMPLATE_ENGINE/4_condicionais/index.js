import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: 'Nome',
        surname: 'Sobrenome',
        age: 99,
    }

    const mensagemTeste = 'Mensagem de teste'

    const auth = true
    
    res.render('home', {user: user, mensagemTeste, auth})
})

app.listen(3030, () => {
    console.log('App rodando em: http://localhost:3000');
})