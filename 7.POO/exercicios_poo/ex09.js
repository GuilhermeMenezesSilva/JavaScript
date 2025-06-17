class Voo {
    constructor(codigoVoo, origem, destino, assentoDisponiveis) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentoDisponiveis = assentoDisponiveis;
    }

    reservarAssento() {
        if (this.assentoDisponiveis > 0) {
            this.assentoDisponiveis--;
            return `Assento reservado com sucesso. Assentos disponíveis: ${this.assentoDisponiveis}`;
        } else if (this.assentoDisponiveis === 0) {
            return "Nenhum assento disponível para reserva.";
        }
    }   

    consultarAssentosDisponiveis() {
        return this.assentoDisponiveis;
    }
}

const voo = new Voo("123", "São Paulo", "Rio de Janeiro", 5);
console.log(voo.reservarAssento());
console.log(voo.consultarAssentosDisponiveis());