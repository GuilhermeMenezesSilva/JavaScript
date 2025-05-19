let nome = ["Rose", "Vinicius", "Sergio", "Guilherme", "Matheus", "Elaine", "Spyke"]
let idade = [44, 25, 28, 12]

function verificaQuantidade(arr) {
    if(arr.length > 5){
        console.log("Muitos elementos")
    } else { 
        console.log("Poucos elementos")
    }
}

verificaQuantidade(nome)
verificaQuantidade(idade)