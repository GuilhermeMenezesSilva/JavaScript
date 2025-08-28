const express = require('express')
const app = express()
const port = 3000

    //Primeiro parametro para a rota
    // Segundo parametro é uma função que recebe a requisição e devolve a resposta
app.get('/', (req, res) =>{
    res.send('Hello <b>World</b>!') // Envia a resposta "Hello World!" para o cliente
})

app.get('/sobre', (req, res) =>{
    res.send('Sobre nós') // Envia a resposta "Sobre nós" para o cliente
})

// Caso utilize uma porta em uso dará erro. 
// Para inicializar o servidor, utilize o seguinte código: node server.js
app.listen(port, () => {
    console.log('http://localhost:3000')
    console.log(`Servidor rodando na porta ${port}`)
})