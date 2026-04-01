const prompt = require('prompt-sync')()



let nome = prompt("Qual é seu nome?   ")
let idade = parseInt(prompt("Qual é sua idade?   "))
let resposta = ( 2026 - idade )

console.log (nome + ", voce nasceu em " + resposta + "!")