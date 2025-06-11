class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor <= 0) return 'Valor de depósito inválido.'

        return 'Depósito realizado com sucesso. Saldo atual: ' + (this.saldo += valor);
    }

    sacar(valor){
        if (valor <= 0 || valor > this.saldo) return 'Não foi possível realizar o saque.'

        return 'Saque realizado com sucesso. Saldo atual: ' + (this.saldo -= valor);
    }
}

const conta = new Conta(1000);
console.log(conta)
console.log(conta.depositar(500)); // Depósito realizado com sucesso. Saldo atual: 1500
console.log(conta)
console.log(conta.sacar(200)); // Saque realizado com sucesso. Saldo atual: 1300
console.log(conta)