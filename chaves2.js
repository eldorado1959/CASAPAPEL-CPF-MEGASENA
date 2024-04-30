// Banco de Dados Fake
let moradores = [{ nome: "João" }, { nome: "Maria" }, { nome: "Pedro" }, { nome: "Ana" }];

// Função para cadastrar novo morador
function cadastrarMorador(nomeMorador) {
  moradores.push({ nome: nomeMorador });
}

// Função para escolher aleatoriamente o ladrão
function escolherLadrao() {
  let indiceAleatorio = Math.floor(Math.random() * moradores.length);
  return moradores[indiceAleatorio];
}

// Função para apresentar o ladrão
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
function menu(opcao) {
  switch (opcao) {
    case 1:
      apresentarLadrao();
      break;
    case 2:
      cadastrarMorador("Novo Morador");
      break;
    case 3:
      visualizarMoradores();
      break;
    case 6:
      console.log("Saindo do programa...");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}

// Função para executar a lógica de investigação
function investigarLadrao() {
  apresentarLadrao();
}

// Execução do programa
investigarLadrao();
