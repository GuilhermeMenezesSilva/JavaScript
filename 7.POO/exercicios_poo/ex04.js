class Carro {
    constructor(marca, cor, gasolinaRestante, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumoPorKm = consumoPorKm;
    }

    dirigirCarro(km) {

        let litrosConsumidos = km / this.consumoPorKm
        this.gasolinaRestante -= litrosConsumidos;

        while (this.gasolinaRestante > 0) {
            console.log(`O carro ${this.marca} está andando.`);
            this.gasolinaRestante -= this.consumoPorKm;
        }
        return `O carro ${this.marca} ${this.cor} parou de andar porque não há mais gasolina.`;
    }

    abastecerCarro(litros) {
        this.gasolinaRestante += litros;
        return `O ${this.marca} foi abastecido com ${litros} litros de gasolina.`;
    }

}


const carro = new Carro("Fusca", "azul", 50, 10);
console.log(carro.dirigirCarro(100)); // "O carro Fusca azul parou de andar porque não há mais gasolina."
console.log(carro.abastecerCarro(20)); // "O carro Fusca foi abastecido com 20 litros de gasolina."
console.log(carro.dirigirCarro(50)); // "O carro Fusca está andando." (repetido até acabar a gasolina)