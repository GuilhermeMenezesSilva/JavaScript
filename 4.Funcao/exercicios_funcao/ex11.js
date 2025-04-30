function faixaEtaria(idade) {
    if (idade < 12) {
        console.log(`é uma criança`)
    } else if (idade == 12 || idade < 24) {
        console.log(` é um jovem`)
    } else {
        console.log(`é um adulto`)
    }
}

const crianca  = faixaEtaria(10)
const adulto  = faixaEtaria(25)