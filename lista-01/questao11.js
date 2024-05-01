// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.


const prompt = require('prompt-sync')(); 

function par_ou_impar(num) {
    return num % 2 == 0 ? "PAR" : "ÍMPAR"
}

while(1){
    let num = parseInt(prompt("Digite um valor numérico: "))
    
    if(num < 0 || isNaN(num)){
        console.log("Valor inválido")
        break
    }
    console.log(`O valor ${num} é ${par_ou_impar(num)}`)
}

