class ContaBancaria {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return `Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente.";
        }

        this.saldo -= valor;
        return `Saque de ${valor} realizado. Saldo atual: ${this.saldo}`;
    }

    consultarSaldo() {
        return `Saldo atual: ${this.saldo}`;
    }
}

const conta = new ContaBancaria("123456", 1000);
console.log(conta.depositar(500));
console.log(conta.sacar(200));
console.log(conta.consultarSaldo());