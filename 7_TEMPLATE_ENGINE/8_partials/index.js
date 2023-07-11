import express from 'express'
import exphbs from 'express-handlebars'

const app = express()
const port = 3030

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ['Item a', 'Item b', 'Item c', 'Item d']
    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este  artigo vai de ajudar a aprender Node.js....',
        comments: 4
    }
    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [ 
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'Este  artigo vai de ajudar a aprender Node.js....',
            comments: 4
        },
        {
            title: 'Aprender Next.js',
            category: 'Javascript',
            body: 'Este  artigo vai de ajudar a aprender Next.js....',
            comments: 4
        },
        {
            title: 'Aprender React.js',
            category: 'Javascript',
            body: 'Este  artigo vai de ajudar a aprender React.js....',
            comments: 4
        },
        {
            title: 'Aprender Express.js',
            category: 'Javascript',
            body: 'Este  artigo vai de ajudar a aprender Express.js....',
            comments: 4
        },
    ]
    res.render('blog', {posts})
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
