// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:


const prompt = require('prompt-sync')(); 

let codigo_origem = parseInt(prompt("Digite o valor do código de origem: "))

if(codigo_origem === 1){
    console.log("Sul")
}else if(codigo_origem === 2){
    console.log("Norte")
}else if(codigo_origem === 3){
    console.log("Leste")
}else if(codigo_origem === 4){
    console.log("Oeste")
}else if(codigo_origem === 5 || codigo_origem === 6 || (codigo_origem >= 25 && codigo_origem <= 50)){
    console.log("Nordeste")
}else if(codigo_origem === 7 || codigo_origem === 8 || codigo_origem === 9){
    console.log("Sudeste")
}else if(codigo_origem >= 10 && codigo_origem <= 20){
    console.log("Centro-Oeste")
}else {
    console.log("Fora dos Intervalos - Produto Importado")
}