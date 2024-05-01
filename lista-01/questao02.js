// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require('prompt-sync')(); 

function percentual(eleitores, votos) {
    let percent =  (votos/eleitores) * 100
    return percent.toFixed(2);
}

let eleitores = parseInt(prompt("Digite o número de eleitores no município: "))
let votos_brancos = parseInt(prompt("Digite o número de votos brancos: "))
let votos_nulos = parseInt(prompt("Digite o número de votos nulos: "))
let votos_validos = parseInt(prompt("Digite o número de votos válidos: "))


console.log(`\nPercentual de votos brancos: ${percentual(eleitores, votos_brancos)}%`)
console.log(`Percentual de votos nulos: ${percentual(eleitores, votos_nulos)}%`)
console.log(`Percentual de votos válidos: ${percentual(eleitores, votos_validos)}%`)