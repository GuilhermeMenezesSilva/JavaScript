class Ecommerce {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }



    adicionarItem(item) {
        let itemExistente = this.itens.find(itemCarrinho => itemCarrinho.id === item.id);

        if (!itemExistente) {
            this.itens.push(item);
            this.quantidadeTotal += item.quantidade;
            this.valorTotal += item.preco * item.quantidade;
        }
    }



    atualizarItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id === item.id) {
                this.quantidadeTotal -= this.itens[itemCarrinho].quantidade;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

                this.itens[itemCarrinho] = item;

            }
        }
        this.quantidadeTotal += item.quantidade;
        this.valorTotal += item.preco * item.quantidade;
    }

    removerItem(id){
        let itemIndex = this.itens.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            this.quantidadeTotal -= this.itens[itemIndex].quantidade;
            this.valorTotal -= this.itens[itemIndex].preco * this.itens[itemIndex].quantidade;
            this.itens.splice(itemIndex, 1);
        }
        else {
            console.log('Item não encontrado no carrinho.');
        }
    }

}

let carrinho = new Ecommerce([
    {
        id: 1,
        nome: 'Camiseta',
        quantidade: 2,
        preco: 29.99
    },
    {
        id: 2,
        nome: 'Calça Jeans',
        quantidade: 2,
        preco: 59.99
    },
    {
        id: 3,
        nome: 'Tênis',
        quantidade: 1,
        preco: 99.99
    }
], 5, 219.96);
console.log(carrinho)

console.log();

carrinho.adicionarItem({
    id: 4,
    nome: 'Jaqueta',
    quantidade: 1,
    preco: 89.99
});
console.log(carrinho)

console.log();

carrinho.atualizarItem({
    id: 2,
    nome: 'Calça Jeans',
    quantidade: 2,
    preco: 30.00
});
console.log(carrinho)

console.log();

carrinho.removerItem(1);
console.log(carrinho)