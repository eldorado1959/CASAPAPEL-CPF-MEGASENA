const readline = require('readline-sync');

// Banco de Dados Fake
let moradores = [];

// Função para cadastrar novo morador
function cadastrarMorador() {
  let nome = readline.question("Digite o nome do novo morador:");
  moradores.push({ nome: nome });
  console.log("Novo morador cadastrado com sucesso!");
}

// Função para escolher aleatoriamente o ladrão
function escolherLadrao() {
  let indiceAleatorio = Math.floor(Math.random() * moradores.length);
  return moradores[indiceAleatorio];
}

// Função para apresentar o ladrão
// Função para apresentar o ladrão
function apresentarLadrao() {
    if (moradores.length === 0) {
      console.log("Não há moradores cadastrados para escolher um ladrao.");
      return;
    }
    
    let ladrao = escolherLadrao();
    console.log(`O ladrao é: ${ladrao.nome}`);
  }
  

// Função para visualizar todos os moradores da vila
function visualizarMoradores() {
  console.log("Moradores da vila:");
  moradores.forEach(morador => {
    console.log(morador.nome);
  });
}

// Menu de Interatividade
function menu() {
  console.log("Menu:");
  console.log("1. Investigar o ladrão");
  console.log("2. Cadastrar novo morador");
  console.log("3. Visualizar todos os moradores da vila");
  console.log("4. Adicionar um novo objeto roubado");
  console.log("5. Visualizar todos os objetos roubados");
  console.log("6. Sair do programa");

  let opcao = parseInt(readline.question("Escolha uma opçao:"));

  switch (opcao) {
    case 1:
      apresentarLadrao();
      break;
    case 2:
      cadastrarMorador();
      break;
    case 3:
      visualizarMoradores();
      break;
    case 6:
      console.log("Saindo do programa...");
      return;
    default:
      console.log("Opção invalida. Tente novamente.");
      break;
  }

  menu(); // Chama o menu novamente para continuar interagindo
}

// Execução do programa
menu();
