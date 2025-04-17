function isPalindrome(palavra) {
    let palavra_invertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavra_invertida += palavra[i];
    }
    return palavra === palavra_invertida;
}

console.log(isPalindrome("radar"))
console.log(isPalindrome("hello"))