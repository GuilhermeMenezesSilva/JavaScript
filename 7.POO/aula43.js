class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        return `${this.nome} está falando`
    }

    comer() {
        return `${this.nome} está comendo`
    }
    
    beber() {
        return `${this.nome} está bebendo`
    }
}

const p1 = new Pessoa("Guilherme", "Menezes")
console.log(p1)
console.log(p1.falar())
console.log(p1.comer())
console.log(p1.beber())