// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

function is_triangle(A, B, C){
    return ((A < B + C) && (B < A + C) && (C < A + B))
}

function is_isosceles(A, B, C){
    return (((A === B) && (B !== C)) || ((A === C) && (A !== B)) || ((B === C) && (A !== B)))
}

function is_escaleno(A, B, C){
    return ((A !== B) && (B !== C))
}

function is_equilatero(A, B, C){
    return ((A === B) && (B === C))
}

function triangle_type(){
    let A = parseFloat(prompt("Digite o valor do lado A: "))
    let B = parseFloat(prompt("Digite o valor do lado B: "))
    let C = parseFloat(prompt("Digite o valor do lado C: "))

    if(is_triangle(A, B, C)){
        if(is_isosceles(A, B, C)){
            console.log("Triângulo Isósceles.")
        }else if(is_escaleno(A, B, C)){
            console.log("Triângulo Escaleno.")
        }else if(is_equilatero(A, B, C)){
            console.log("Triângulo Equilátero.")
        }
    } else {
        console.log(`Os valores A = ${A}, B = ${B} e C = ${C} não formam um triângulo.`)
    }
}
triangle_type()



