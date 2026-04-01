const prompt = require('prompt-sync')();



let custo = parseFloat(prompt("qual o custo da produção? "))
let venda = parseFloat(prompt("quais as vendas total? "))
let lucro = venda - custo


if (lucro > 500) {console.log ("Margem de lucro saudável: R$" + lucro)
    
} else {console.log ("Atenção: Margem de lucro perigosamente baixa!")

}

