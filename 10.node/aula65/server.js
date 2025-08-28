const express = require('express')
const app = express()
const porta = 3000
const routes = require('./routes/home')

app.use('/', routes)

app.listen(porta, () => {
    console.log('http://localhost:3000/')
    console.log(`Servidor rodando na porta ${porta}`)
})