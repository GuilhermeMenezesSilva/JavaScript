// Factory Functions

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Quando se tem uma função dentro de outra função ela se chama MÉTODO
        fala(assunto) {
            return `${this /*Se refere ao objeto que o chama*/.nome} está ${assunto}.`
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Guilherme', 'Menezes', 1.82, 82)
console.log(p1.fala('falando sobre JS'))
console.log(`O IMC da pessoa um é: ${p1.imc()}`)

console.log()

const p2 = criaPessoa('Vinicius', 'Menezes', 1.90, 84)
console.log(`O IMC da pessoa dois é: ${p2.imc()}`)
console.log(p2.fala('falando sobre Java'))