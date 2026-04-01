const prompt = require('prompt-sync')();



let custo = parseFloat(prompt("qual o custo da produção? "))
let tempo = parseFloat(prompt("quantas horas demoraria? "))
let ong = parseFloat(prompt("você é de uma ONG? (sim/nao) "))
let desconto = custo * 0.1


if (ong == "sim") {console.log(custo * tempo / desconto)
    
} else { console.log(custo)
    
}