let pessoa = {
    nome: "Guilherme",
    idade: 18,
    profissao: "Programador"
}
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`)

console.log("----------")

// Adicionando propriedade
pessoa.casado = false
console.log(`A noticia de que sou casado é ${pessoa.casado}.`)

console.log("----------")

// Apagando propriedade
delete pessoa.nome
console.log(pessoa)