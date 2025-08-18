const express = require('express')
const app = express()
const porta = 3000
const routes = require('./routes/home')
const path = require('path')

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(porta, () => {
    console.log('http://localhost:3000/')
    console.log(`Servidor rodando na porta ${porta}`)
})