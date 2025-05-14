
//                 0           1          2        3         4
const nomes = ['Matheus', 'Guilherme', 'Rose', 'Sergio', 'Vinicius']
console.log(nomes)

console.log()

// pop -> remove elmento escolhido
const removidos = nomes.splice(3, 1) // Ela retorna um array dos elementos excluidos
console.log(nomes, removidos)

console.log()

// shift -> remove elmento do inicio
nomes.splice(0, 1)
console.log(nomes)

console.log()

// push -> adicionar no final 
nomes.splice(nomes.length, 0, 'Elaine')
console.log(nomes)

console.log()

// unshift -> adiciona no inicio 
nomes.splice(0, 0, 'Leticia', 'Spyke')
console.log(nomes)