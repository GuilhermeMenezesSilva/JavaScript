// prompt
let idade = prompt("Digite sua idade:")
let nome = prompt("Qual o seu nome? ")

console.log(idade)
console.log(`O seu nome é ${nome}`)

// alert
alert("Cadastro realizado com sucesso")

// math -> simula operações matemáticas
let num1 = 9.5457
let num2 = Math.floor(num1) // Arredonda para baixo
let num3 = Math.ceil(num1) // Arredonda para cima
let num4 = Math.round(num1) // Retorna o valor decimal mais próximo
let num5 = Math.max(1, 2, 3, 45, 6, 7, 8) // Mostra o MAIOR numero da sequencia
let num6 = Math.min(1, 2, 3, 45, 6, 7, 8) // Mostra o MENOR numero da sequencia

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(Math.PI) // Mostra o PI
console.log(maiorNumero)

// date -> obter data
const data = new Date() // <- Possui diversos metodos 

console.log('Dia ',             data.getDate())         // Pega o dia atual
console.log('Mês ',             data.getMonth())        // Pega o mês atual (Mês começa do zero)
console.log('Ano ',             data.getFullYear())     // Pega o ano atual
console.log('Hora atual ',      data.getHours())        // Pega a hora atual
console.log('Minuto atual ',    data.getMinutes())      // Pega o minuto atual
console.log('Segundo atual ',   data.getSeconds())      // Pega o segundo atual
console.log('Milesimo atual',   data.getMilliseconds()) // Pega o milesimo atual
console.log('Dia Semana',       data.getDay())          // 0 = domingo, 6 = sabado
console.log('Dia escrito: ',      data.toString())      // Transforma a data em escrita