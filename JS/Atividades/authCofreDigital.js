const prompt = require('prompt-sync')();




let senhaCorreta = 9876; 
let senhaInput = prompt('Digite a senha: '); 

while (true) {
    if (senhaInput == senhaCorreta) {
        console.log("Cofre liberado com sucesso!");
        break; 
    } else {
        console.log("Acesso negado: Senha incorreta. Tente novamente.");
        senhaInput = prompt('Digite a senha: '); 
    }
}