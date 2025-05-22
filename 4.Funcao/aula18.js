// Parâmentros de uma função

// Passando valores para um paramentro:
function soma(a, b){
    console.log(a+b)
}
soma(2,6)
     // Valores que serão atribuidos aos parametros a e b

// Atribuindo os valores ao parametro:
function soma(a = 2, b = 6){
    console.log(a+b)
}
soma()