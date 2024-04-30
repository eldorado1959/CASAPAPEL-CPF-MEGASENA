
//validacao de CPF



const readline = require('readline-sync');

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999") {
        return false;
    }

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
        return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }

    return true;
}

// Obter CPF do usuário
const cpf = readline.question("Digite CPF (somente numeros): ");

// Validar CPF
if (validarCPF(cpf)) {
    console.log("CPF válido.");
} else {
    console.log("CPF inválido.");
}

