// Retornar numeros maiores que 10 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
                                // Recebe uma callback para loopar no array
const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados.sort())

// Retornar pessoas que tem o nome com 6 letras ou mais
const pessoas = [ 
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasFiltradas = pessoas.filter(obj => obj.nome.length >= 6)
console.log(pessoasFiltradas)