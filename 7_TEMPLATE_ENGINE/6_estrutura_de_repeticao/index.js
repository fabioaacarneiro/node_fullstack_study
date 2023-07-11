import express from 'express'
import exphbs from 'express-handlebars'

const app = express()
const port = 3030

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ['Item a', 'Item b', 'Item c', 'Item d']
    res.render('dashboard', {items})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Nome',
        surname: 'Sobrenome',
        age: 99,
    }

    const mensagemTeste = 'Mensagem de teste'

    const auth = true
    const aproved = true
    
    res.render('home', {user: user, mensagemTeste, auth, aproved})
})

app.listen(port, () => {
    console.log(`App rodando em: http://localhost:${port}`);
})
