function cnh(idade) {
    if (idade >= 18) {
        return "Pode tirar a CNH"
    }

    return "Não pode tirar a CNH"
}

console.log(cnh(18))
console.log(cnh(19))
console.log(cnh(17))