const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function (acumulador, valor) {
    console.log(acumulador, valor)
    acumulador += valor
    return acumulador

}, 0 /*<- valor definido para que o acumulador inicie por ele*/)
console.log(total)