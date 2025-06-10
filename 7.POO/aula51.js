class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} dispositivo ligado`)
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} dispositivo esta desligado`)
            return
        }
        this.ligado = false
    }
}

const d1 = new DispositivoEletronico('Smatphone')
console.log(d1)

// Classe que herda de dispositivo eletronico:
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) // Chama o construtor nome da classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

console.log() // Separar por uma linha cada console

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy A10')
console.log(s1)