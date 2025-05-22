let pessoa = {
    "nome": "Guilherme",
    "idade": 22,
    "position": "infra",
}

console.log(pessoa.nome)

let jsonToString = JSON.stringify(pessoa)
console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)
console.log(stringToJson)