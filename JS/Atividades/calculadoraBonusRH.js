const prompt = require('prompt-sync')();



function funçãoBonus(salario, cargo) {
    let bonus1;

    switch (cargo) {

        case 'Estágiario':
        bonus1 = salario * 0.1
        break;

        case 'Júnior':
        bonus1 = salario * 0.15
        break;

        case 'Pleno':
        bonus1 = salario * 0.2
    break;

    default:
    bonus1 = salario * 0
    break;
}}

let salario = parseFloat(prompt("Digite o salário do funcionário: "));
let cargo = parseFloat(prompt("Digite o cargo do funcionário: (Estágiario, Júnior, Pleno) "));
console.log("O bônus do funcionário é: " + funçãoBonus(salario, cargo));