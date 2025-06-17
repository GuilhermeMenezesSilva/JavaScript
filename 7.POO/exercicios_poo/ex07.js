class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        let area = this.largura * this.altura;
        return `A área do retângulo é: ${area}`;
    }

    calcularPerimetro() {
        let perimetro = 2 * (this.largura + this.altura);
        return `O perímetro do retângulo é: ${perimetro}`;
    }
}

const retangulo = new Retangulo(5, 10);
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());