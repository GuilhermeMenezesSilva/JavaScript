/*
Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.

A função deve retornar o maior número presente no array.
*/ 

let arr = [2,5,4,6,8]

function findMaxNumber(arr) {
  return Math.max(...arr);
}
 
console.log(findMaxNumber(arr));