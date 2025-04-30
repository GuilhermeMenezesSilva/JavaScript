function identifica(tipo_dado) {
    if (typeof (tipo_dado) === "number") {
        return "É um number"

    } else if (typeof (tipo_dado) === "string") {
        return "É um texto"
        
    } else {
        return "É um boolean"
    }

}
console.log(identifica(5))
console.log(identifica("Olá, Mundo!"))
console.log(identifica(true))