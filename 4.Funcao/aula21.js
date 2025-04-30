// Escopo léxico
const nome = "Guilherme"

function falaNome(){
    const nome = "Menezes"
    console.log(nome)
}
falaNome()

function usaFalaNome(){
    falaNome()
}

usaFalaNome()