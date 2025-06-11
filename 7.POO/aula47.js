class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

Pessoa.prototype.maos = 2;

const p1 = new Pessoa('Guilherme', 'Menezes') // Instancia da classe

console.log(p1.maos)