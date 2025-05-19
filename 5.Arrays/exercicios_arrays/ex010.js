/*
Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.

A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.

Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.

Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.

Considere que o array pode conter tanto números inteiros positivos quanto negativos
*/ 

function sumUniqueNumbers(array) {
    let somaUnicos = 0;
 
    for(let i = 0; i < array.length; i++) {
        let numAtual = array[i];
        let numRepetidos = 0;
 
        for(let j = 0; j < array.length; j++) {
            if(numAtual === array[j]) {
                numRepetidos ++;
            }
        }
 
        if (numRepetidos === 1) {
            somaUnicos += numAtual;
        }
        console.log(numRepetidos)
    }
 
    return somaUnicos;
}
 
let array = [1,1,2,3,4,4];
console.log(sumUniqueNumbers(array));
