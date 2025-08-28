require('dotenv').config() // Carregando variáveis de ambienteq

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Conexão ao banco de dados
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('Pronto') // Emitindo o evento 'Pronto' quando a conexão for bem-sucedida
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


const porta = 3000
const routes = require('./routes/home')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middlewares')

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware)

app.use('/', routes)

//O que vai ocorrer quando o aplicativo ficar pronto
app.on('pronto', () => {
    app.listen(porta, () => {
        console.log('http://localhost:3000/')
        console.log(`Servidor rodando na porta ${porta}`)
    })
})