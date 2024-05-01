// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

function converter(celsius) {
    fahrenheit = (celsius * 1.8 + 32)
    return fahrenheit.toFixed(2)
}

const prompt = require('prompt-sync')(); 

let celsius = parseFloat(prompt("Digite o valor em graus celsius que dejesa converter: "))

console.log(`Fahrenheit: ${converter(celsius)}`)