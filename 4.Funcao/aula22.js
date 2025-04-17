// Closure -> função que lembra onde foi criada

function retornaFuncao(nome) {
    return function (sobrenome) {
        return nome + sobrenome;
    }; // Função anonima, pois ela não tem nome
}

// O closure pode se alterar de função para função
const funcao = retornaFuncao("Guilherme");
const funcao2 = retornaFuncao("Vinicius");

console.log(funcao("Menezes"), funcao2("Santos"));