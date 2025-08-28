require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes/home')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middlewares')

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOption = session({
    secret: 'meuSegredo',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,  
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 dia
        httpOnly: true
    },
})
app.use(sessionOption)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware)

app.use('/', routes)

//O que vai ocorrer quando o aplicativo ficar pronto
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000/')
        console.log(`Servidor rodando na porta 3000`)
    })
})