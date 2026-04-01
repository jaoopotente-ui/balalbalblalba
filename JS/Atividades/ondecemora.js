const prompt = require('prompt-sync')();

let nome = prompt('Qual seu nome?  ');
let cidade = prompt('Onde você mora?  '); 
console.log("Olá " + nome + ", de " + cidade + "!")