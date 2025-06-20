function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100);
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100);
}

const p1 = new Produto('Camiseta', 50);
console.log(p1);

const p2 = {
    nome: "Caneca",
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

console.log(p2);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "G"
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    }
});
p3.aumento(10);
console.log(p3);
