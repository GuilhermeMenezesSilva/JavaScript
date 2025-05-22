// defineProperty -> Faz com que nenhuma propriedade seja alterada.
// defineProperties -> Faz com que diversas propriedades não sejam alteradas

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave
        value: estoque, // pega o valor da chave
        writable: false, // pode (true) ou não (false) alterar o valor
        configurable: false // apagar ou reconfigurar a chave
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },
    })
}

const p1 = new Produto("Camiseta", 20, 3)
console.log(p1)