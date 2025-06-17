// Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falar = function () {
    console.log(`Olá, meu nome é ${this.nome}`)
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

// instancia -> Gera novos objetos
const pessoa1 = new Pessoa("Guilherme", "Menezes");
const pessoa2 = new Pessoa("Matheus", "Menezes");
const data = new Date();

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)