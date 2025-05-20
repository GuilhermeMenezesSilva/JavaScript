console.log("Declaração de forma literal:")
const pessoa = {
    //  chave : valor
    nome: "Guilherme",
    sobrenome: "Menezes"
}
// Acessar valor de um objeto por ponto ou colchete
console.log(pessoa.nome)
console.log(pessoa["sobrenome"]) // Útil para quando os dados vem de uma base de dados e se coloca de forma dinamica.

console.log("----------")

console.log("Declaração com construtor:")
const pessoa1 = new Object()
pessoa1.nome = 'Rose',
pessoa1.sobrenome = 'Aparecida',
pessoa1.idade = 42
pessoa1.falarNome = function () {
    return (`${this.nome} esta falando seu nome`)
} // Métodos -> function dentro do objeto que executa uma ação
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}



console.log("for in para obter valor ou chave")
console.log("obter as chave")
for (let chave in pessoa1) {
    console.log(chave)
}

console.log("----------")

console.log("obter os valores")
for (const key in pessoa1) {
    console.log(pessoa1[key])
}