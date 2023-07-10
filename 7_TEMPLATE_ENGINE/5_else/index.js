import express from 'express'
import exphbs from 'express-handlebars'

const app = express()
const port = 3030

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

    const auth = false
    const aproved = true
    
    res.render('home', {user: user, mensagemTeste, auth, aproved})
})

app.listen(port, () => {
    console.log(`App rodando em: http://localhost:${port}`);
})