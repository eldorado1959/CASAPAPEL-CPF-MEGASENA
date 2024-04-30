const readlineSync = require('readline-sync');

// Banco de Dados Fake
let array = [
    { nome: "Professor", funcao: "Líder", arma: "Planejamento" },
    { nome: "Toquio", funcao: "Assaltante", arma: "Metralhadora" },
    { nome: "Denver", funcao: "Assaltante", arma: "Martelo" },
    { nome: "Rio", funcao: "informatica", arma: "Notebook" },
    { nome: "Nairobi", funcao: "Negociadora", arma: "Inteligência emocional" }
];

// Função para exibir todos os personagens
function visualizarPersonagens() {
    console.log("=========== Personagens da Série ===========");
    array.forEach(personagem => {
        console.log(`Nome: ${personagem.nome} | Função: ${personagem.funcao} | Arma: ${personagem.arma}`);
    });
    menu();
}

// Função para adicionar um novo personagem
function adicionarPersonagem() {
    let nome = readlineSync.question("Digite nome do novo personagem: ");
    let funcao = readlineSync.question("Digite função do novo personagem: ");
    let arma = readlineSync.question("Digite arma do novo personagem: ");

    array.push({ nome: nome, funcao: funcao, arma: arma });
    console.log(`O personagem ${nome} foi adicionado!`);
    menu();
}

// Função para atualizar a arma de um personagem
function atualizarArma() {
    let nomePersonagem = readlineSync.question("Digite o nome do personagem que deseja atualizar a arma: ");
    let novaArma = readlineSync.question("Digite a nova arma: ");

    let personagem = array.find(p => p.nome === nomePersonagem);
    if (personagem) {
        personagem.arma = novaArma;
        console.log(`Arma do personagem ${nomePersonagem} atualizada para ${novaArma}!`);
    } else {
        console.log(`Personagem ${nomePersonagem} nao encontrado!`);
    }
    menu();
}

// Função para verificar a quantidade de explosivos disponíveis
function verificarExplosivos() {
    let quantidadeExplosivos = 100; // Suponhamos que começamos com 100 explosivos
    console.log(`Quantidade de explosivos disponivel: ${quantidadeExplosivos}`);
    menu();
}

// Função principal que exibe o menu e gerencia as opções
function menu() {
    console.log("\n=== Menu de Opcoes ===");
    console.log("01. Visualizar todos personagens");
    console.log("02. Adicionar novo personagem");
    console.log("03. Atualizar arma de um personagem");
    console.log("04. Verificar quantidade de explosivos");
    console.log("05. Sair ");

    let opcao = readlineSync.question("Escolha uma opcao: ");

    switch (opcao) {
        case "01":
            visualizarPersonagens();
            break;
        case "02":
            adicionarPersonagem();
            break;
        case "03":
            atualizarArma();
            break;
        case "04":
            verificarExplosivos();
            break;
        case "05":
            console.log("Encerrando ...");
            break;
        default:
            console.log("Opcao invalida! ,escolha novamente.");
            
            menu();
    }
}

// Chamando a função principal para iniciar o programa
console.log();
menu();
console.log();

