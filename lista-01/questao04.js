// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

const prompt = require('prompt-sync')(); 

let avaliacao_01 = parseFloat(prompt("Digite a nota da 1° avaliação: "))
let avaliacao_02 = parseFloat(prompt("Digite a nota da 2° avaliação: "))

function media_semestral(nota1, nota2) {
    return (nota1 + nota2) / 2
}

let media = media_semestral(avaliacao_01, avaliacao_02)

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado")
}