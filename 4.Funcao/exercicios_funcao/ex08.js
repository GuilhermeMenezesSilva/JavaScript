function contaString(texto) {
    if (texto.length > 10) {
        return "Texto muito longo"
    } else {
        return "Texto dentro do limite"
    }
}
console.log(contaString("Olá, mundo!"))