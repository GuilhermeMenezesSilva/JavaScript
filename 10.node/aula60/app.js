const mod1 = require('./mod1'); // Importando o módulo 

const falanome = require('./mod1').falaNome; // Importando uma parte especifica do módulo 

const {nome, sobrenome} = require('./mod1'); // Importação via desestruturação

console.log(mod1.nome);
console.log(falanome());
console.log(sobrenome);