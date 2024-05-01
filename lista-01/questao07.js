// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


const prompt = require('prompt-sync')(); 

let qtd_macas = parseInt(prompt("Digite a quantidade de maças compradas: "))

if(qtd_macas >= 12){
    console.log(`Total da compra R$ ${qtd_macas * 0.25}`)
}else {
    console.log(`Total da compra R$ ${qtd_macas * 0.30}`)
}