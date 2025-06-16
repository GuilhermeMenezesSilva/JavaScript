class WordCounter {
    constructor() { }

    countWords(texto) {


        if (texto.trim() === "") {
            console.log("Entrada vazia. Por favor, forneça uma palavra");
            return;
        }

        const palavras = texto.trim().split(/\s+/);
        return `Número de palavras: ${palavras.length}`;

    }

}

const contador = new WordCounter();
console.log(contador.countWords("Hello, World"));
console.log(contador.countWords(" "));
console.log(contador.countWords(1));
console.log(contador.countWords(true));