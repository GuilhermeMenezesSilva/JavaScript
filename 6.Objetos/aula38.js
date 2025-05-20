let pessoa = {
    nome: "Guilherme",
    idade: 18,
    profissao: "Programador"
}
console.log(pessoa)

console.log("----------")

let info = {
    formado: true,
    trabalhando: true
}
console.log(info)

console.log("----------")

Object.assign(pessoa, info)
console.log(pessoa) // Saida -> nome: 'Guilherme', idade: 18, profissao: 'Programador', formado: true, trabalhando: true