class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = "Rua Lourenço Siqueira Preto";
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoNumero(novoNumero) {
        this.numero = novoNumero;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

const endereco = new Endereco("Rua Lourenço Siqueira Preto", 123, "São Paulo", "SP");
console.log(endereco); // "Rua Lourenço Siqueira Preto"

endereco.novaRua = "Avenida Paulista";
endereco.novoNumero = 456;
endereco.novaCidade = "São Paulo";
endereco.novoEstado = "SP";
console.log(endereco);