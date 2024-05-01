// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')(); 

let sum = 0
let weights = 0

while(1){
    let num = parseFloat(prompt("Digite um valor decimal: "))

    if(num === 0){
        console.log(`\nA média ponderada dos valores é igual a: ${(sum/weights).toFixed(2)}`)
        break
    }
       
    let weight =  parseFloat(prompt("Digite o peso do valor: "))

    sum += (num * weight)
    weights += weight
}