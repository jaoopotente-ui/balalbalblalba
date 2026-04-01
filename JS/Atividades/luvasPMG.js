const prompt = require('prompt-sync')();

let estoqueTamanhos = [10, 15, 8];
let compraP = Number(prompt("Quantas luvas P compraram? "));

estoqueTamanhos[0] -= compraP;


if (estoqueTamanhos[0] < 5) {
    console.log("Alerta: Estoque de luvas tamanho P está crítico!");
    
} else {console.log("Estoque atualizado. Quantidade restante de luvas tamanho P: " + estoqueTamanhos[0])
    
}