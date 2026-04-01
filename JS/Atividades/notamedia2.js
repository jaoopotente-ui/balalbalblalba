const prompt = require('prompt-sync')();

todasnotas = []
let notan1 = parseFloat(prompt("qual a tua primeira nota?   "))
let notan2 = parseFloat(prompt("qual a tua segunda nota?   "))

todasnotas.unshift(notan1)
todasnotas.push(notan2)

let medianota = (todasnotas[0] + todasnotas[1] / 2)

console.log("nota media: " + medianota)
