// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')(); 

let count = 0
let sum = 0

while(1){
    let num = parseFloat(prompt("Digite um valor numérico: "))
    
    if(num === 0){
        console.log(`Média aritmética: ${(sum/count).toFixed(2)}`)
        break
    }

    count += 1
    sum += num
}