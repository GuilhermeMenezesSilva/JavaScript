export const nome = 'João';
export const sobrenome = 'Silva';
export const idade = 30;

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
}