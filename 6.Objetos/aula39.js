let pessoa = {
    idade: 22,
    nome: "Guilherme",
}

console.log(Object.keys(pessoa))

console.log("----------")

console.log("for in para obter valor ou chave")
console.log("obter as chave")
for (let chave in pessoa) {
    console.log(chave)
}

console.log("----------")

console.log("obter os valores")
for (const key in pessoa) {
    console.log(pessoa[key])
}