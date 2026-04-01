const prompt = require ('prompt-sync')();


let listaAlunos = ["Marcos", "Jose"]
let novoaluno = prompt("qual o nome do proximo aluno?  ")

listaAlunos.push (novoaluno)
console.log (listaAlunos)
