class Pessoa {
    // Método construtor com propriedades
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    // Método declarado como função
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

// Propriedades adicionadas fora do construtor
Pessoa.prototype.maos = 2;

const p1 = new Pessoa('Guilherme', 'Menezes') // Instancia da classe

console.log(p1.maos)