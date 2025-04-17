function countVowels(s) {
    // Definir uma string com todas as vogais (tanto maiúsculas quanto minúsculas)
    const vowels = 'aeiouAEIOU';
    
    // Contar o número de vogais na string usando o método filter e length
    const count = [...s].filter(char => vowels.includes(char)).length;
    
    return count;
}

const text = "Hello World!";
console.log(countVowels(text));  // Saída: 3 (as vogais são 'e', 'o', 'o')