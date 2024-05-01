// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


const prompt = require('prompt-sync')(); 

let valor01 = parseFloat(prompt("Digite o 1° valor: "))
let valor02 = parseFloat(prompt("Digite o 2° valor: "))

if(valor01 > valor02) {
    console.log(`${valor01}\n${valor02}`)
}else {
    console.log(`${valor02}\n${valor01}`)
}