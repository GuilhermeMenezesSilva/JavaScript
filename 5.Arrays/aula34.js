// Dobrar os numeros
const numeros = [5, 50, 80, 1, 2, 3, 4, 51, 11, 52, 27]
                                    // Recebe função de callback
const numerosDobrados = numeros.map(valor => valor * 2)
console.log(numerosDobrados)

// Retornar apenas o nome das pessoas
const pessoas = [ 
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nomePessoas = pessoas.map(obj => obj.nome)
console.log(nomePessoas)

// Remover apenas a chave "nome"
                                    // Expressão
const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades)