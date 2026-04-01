const prompt = require ('prompt-sync')();


let item = parseInt(prompt("Qual item gostaria saber da lista? (1 - 4)   "));

let listaDeCompras = ['Arroz', 'Feijão', 'Macarrão', 'Carne'];
for (let i = 0; i < listaDeCompras.length; i++) {
    console.log("Item: " + listaDeCompras[i]);
}