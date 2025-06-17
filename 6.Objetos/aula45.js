function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
    // Chama o construtor da classe pai
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Herda os métodos de Produto
Camiseta.prototype = Object.create(Produto.prototype);
// Define o construtor correto para Camiseta
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Genérico', 10.99);
const camiseta = new Camiseta('Camiseta', 29.99, 'Preta');

console.log(produto);
console.log(camiseta);