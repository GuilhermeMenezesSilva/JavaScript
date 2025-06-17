class ContaCorrente {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        } else {
            console.log("Valor de saque inválido. Saldo insuficiente.");
        }
    }

    exibirSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

const cc = new ContaCorrente("12345-6", 1000);
cc.depositar(500); // Depósito de R$500 realizado com sucesso!
cc.sacar(200); // Saque de R$200 realizado com sucesso!
cc.exibirSaldo(); // Saldo atual: R$1300.00

console.log("=====================================");

class ContaPoupanca extends ContaCorrente {
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo, 0); // Conta Poupança não tem limite
        this.taxaJuros = taxaJuros;
    }

    transferir(valor, contaDestino) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
            console.log(`Transferência de R$${valor} realizada com sucesso!`);
        } else {
            console.log("Valor de transferência inválido. Saldo insuficiente.");
        }
    }

    aplicarJuros() {
        const juros = this.saldo * this.taxaJuros / 100;
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
}

const cp = new ContaPoupanca("65432-1", 2000, 5);
cp.aplicarJuros(100); // Juros de R$100.00 aplicados. Novo saldo: R$2100.00
cc.exibirSaldo(); // Saldo atual: R$1300.00
cp.transferir(300, cc); // Transferência de R$300.00 realizada com sucesso!
cc.exibirSaldo(); // Saldo atual: R$1600.00

console.log("=====================================");

class ContaEspecial extends ContaCorrente {
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros * 2;
    }

    aplicarJuros() {
        const juros = this.saldo * (this.taxaJuros / 100);
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
}
const ce = new ContaEspecial("78901-2", 3000, 10);
ce.aplicarJuros(300); // Juros de R$300.00 aplicados. Novo saldo: R$3300.00
ce.exibirSaldo(); // Saldo atual: R$3300.00
ce.sacar(500); // Saque de R$500.00 realizado com sucesso!