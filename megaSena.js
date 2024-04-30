function gerarNumerosMegaSena(qtdeJogos) {
    const jogos = [];
    for (let i = 0; i < qtdeJogos; i++) {
        const jogo = [];
        while (jogo.length < 6) {
            const numero = Math.floor(Math.random() * 60) + 1; // Gera um número aleatório entre 1 e 60
            if (!jogo.includes(numero)) {
                jogo.push(numero);
            }
        }
        jogo.sort((a, b) => a - b); // Ordena os números do jogo em ordem crescente
        jogos.push(jogo);
    }
    return jogos;
}

// Exemplo de uso: gerar 3 jogos para a Mega Sena
const qtdeJogos = 3;
const jogosMegaSena = gerarNumerosMegaSena(qtdeJogos);
console.log("Números para a Mega Sena:");
jogosMegaSena.forEach((jogo, index) => {
    console.log(`Jogo ${index + 1}: ${jogo.join(', ')}`);
});
