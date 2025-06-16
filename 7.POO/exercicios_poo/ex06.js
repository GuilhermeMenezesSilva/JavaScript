class WordCounter {
    constructor() { }

    countWords(texto) {
        if (typeof texto !== 'string') {
            console.log("Entrada inválida. Por favor, forneça uma string.");
            return;
        }

        if (texto.trim() === "") {
            console.log("Entrada vazia. Por favor, forneça uma palavra");
            return;
        }

        const palavras = texto.trim().split(/\s+/);
        const numeroDePalavras = palavras.length;

        console.log(`Número de palavras: ${numeroDePalavras}`);

    }

}

const contador = new WordCounter();
contador.countWords("Hello, World");
contador.countWords(" ");
contador.countWords(1);
contador.countWords(true);