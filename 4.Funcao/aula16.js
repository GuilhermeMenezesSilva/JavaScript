// Pertence ao escopo global
let n = 10;

function numero() {
  // Pertence apenas ao escopo da função
  let n = 20;
  n++;
  console.log(n);
}

numero(); // Exibirá 21
console.log(n); // Exibirá 10