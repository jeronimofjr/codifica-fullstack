// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

const prompt = require('prompt-sync')(); 

let avaliacao_01 = parseFloat(prompt("Digite a nota da 1° avaliação: "))
let avaliacao_02 = parseFloat(prompt("Digite a nota da 2° avaliação: "))

function media_semestral(nota1, nota2) {
    return (nota1 + nota2) / 2
}

let media = media_semestral(avaliacao_01, avaliacao_02)

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado")
}else {
    console.log("Você foi REPROVADO! Estude mais")
}