class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // Método de instancia
    aumentarVolume() {
        this.volume += 2
    }
    // Método de instancia   
    diminuirVolume() {
        this.volume -= 2
    }

    // Método statico
    static trocaPilha() {
        console.log('Ok, irei trocar')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha() // Unica forma de acessar o método estatico é usando a classe