// Banco de Dados Fake
let moradores = [];

// Função para cadastrar novo morador
function cadastrarMorador() {
  let nome = prompt("Digite o nome do novo morador:");
  moradores.push({ nome: nome });
  console.log("Novo morador cadastrado com sucesso!");
}

// Função para escolher aleatoriamente o ladrão
function escolherLadrao() {
  let indiceAleatorio = Math.floor(Math.random() * moradores.length);
  return moradores[indiceAleatorio];
}

// Função para apresentar o ladrão q é recebido aleatoriamente pela funcao acima
function apresentarLadrao() {
  let ladrao = escolherLadrao();
  console.log(`O ladrão é: ${ladrao.nome}`);
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
  console.log("01. Investigar o ladrao");
  console.log("02. Cadastrar novo morador");
  console.log("03. Visualizar todos os moradores da vila");
  console.log("04. Adicionar um novo objeto roubado");
  console.log("05. Visualizar todos os objetos roubados");
  console.log("06. Sair do programa");

  let opcao = parseInt(prompt("Escolha uma opcao:"));

  switch (opcao) {
    case 01:
      apresentarLadrao();
      break;
    case 02:
      cadastrarMorador();
      break;
    case 03:
      visualizarMoradores();
      break;
    case 06:
      console.log("Saindo do programa...");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }

  menu(); // Chama o menu novamente para continuar interagindo
}

// Execução do programa
menu();
