// IIFE 
// Toca o escopo global:
function qualquerCoisa() {
    console.log(1223432)
}
qualquerCoisa()

    // Não toca:
    (function (idade, peso, altura) {

        const sobrenome = 'Menezes'
        function criaNome(nome) {
            return nome + ' ' + sobrenome
        }

        function falaNone() {
            console.log(criaNome('Guilherme'))
        }
        
        falaNone()
        console.log(idade, peso, altura)

    })(20, 82, 1.82);