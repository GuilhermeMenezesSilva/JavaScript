import Pessoa, { nome, sobrenome, idade, soma } from './modulo1.js';

const p1 = new Pessoa('João', 'Silva');
p1.falar();
console.log(nome, sobrenome, idade);
console.log(soma(5, 10));