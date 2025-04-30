// for
for (let numero = 0; numero < 101; numero++) {
    console.log(`O numero é: ${numero}`);

}

// for in
const frutas = ['Pera', 'Maçã', 'Uva']

for (let i in frutas) {
    console.log(frutas[i]) // Retorna o valor de acordo com o indice 
}

// for of
const nome = 'Guilherme Menezes'

for (let valor of nome) {
    console.log(valor)
}

// while
var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x += n;
}
console.log(n)

console.log()

// do while
let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);
console.log(i);