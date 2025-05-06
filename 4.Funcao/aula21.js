// Escopo léxico
const nome = "Guilherme"

function falaNome(){
    const nome = "Menezes"
    console.log(nome)
}

function usaFalaNome(){
    falaNome()
}
usaFalaNome()