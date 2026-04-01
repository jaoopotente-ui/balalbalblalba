const prompt = require ('prompt-sync')();


let paciente = {
    nome: prompt("Qual é o nome do paciente?   "),
    raca: prompt("Qual é a raça do paciente?   "),
    idade: prompt("Qual é a idade do paciente?   "),
}

if (paciente.idade > 7) {console.log("O paciente " + paciente.nome + " já é sênior e precisa de exames de rotina")
    
} else {console.log("Paciente na faixa de idade regular.")
    
}