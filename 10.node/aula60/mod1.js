const nome = 'Tales';
const sobrenome = 'Júnior';

const falaNome = () => {
  return `${nome} ${sobrenome}`;
}

// Objeto original 
module.exports.nome = nome;

// Referencia ao objeto original
exports.sobrenome = sobrenome;

// Outra opção de exportação
this.falaNome = falaNome;

console.log(module.exports);