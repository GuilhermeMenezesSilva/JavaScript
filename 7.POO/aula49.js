class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

let maos = Symbol()
Pessoa.prototype[maos] = 2;

const p1 = new Pessoa('Guilherme', 'Menezes') // Instancia da classe

// acessando symbol
console.log(Pessoa.prototype[maos])
console.log(p1.prototype[maos])