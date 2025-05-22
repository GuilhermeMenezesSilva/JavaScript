// Constructor Functions

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados, ou seja, não podem ser acessados com a notação de ponto
    const Id = 123456
    const metodoInterno = function () {
    }

    // Atributos ou métodos publicos, ou seja, podem ser acessados com a notação de ponto
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function () {
        console.log(this.nome + ': sou um método')
    };
}
        // new instancia o objeto anteriormente criado  
const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa('Guilherme', 'Menezes')
p1.metodo()