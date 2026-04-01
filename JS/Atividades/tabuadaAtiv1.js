const prompt = require ('prompt-sync')();

let tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = parseInt(prompt("qual tabuada gostaria de ver?   "));

for (let i = 0; i < tabuada.length; i++) {
    console.log(tabuada[i] * numero);
}

