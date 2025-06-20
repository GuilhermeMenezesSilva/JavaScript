const _velocidade = Symbol('velocidade') // Atributo privado que não é possivel alterar de fora

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    acelerar() {
        if (this[_velocidade] == 100) return
        this[_velocidade]++
    }

    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }
}

const c1 = new Carro('Fusca')
c1.velocidade = 99 // setter
console.log(c1.velocidade) // getter