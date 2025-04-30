// argumento opcional - não passar a mesma quantidade de argumento que está no parametro
function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Essa função precisa ter dois argumentos");
    } else {
        return a + b;
    }
}
console.log(soma(1));
console.log(soma(1, 2));