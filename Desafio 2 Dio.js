// Cria uma função que recebe a quantidade de vitórias e derrotas de um jogador
function calculaSaldo(vitorias, derrotas) {
    // Calcula o saldo de ranqueadas com a diferença entre vitórias e derrotas
    let saldo = vitorias - derrotas;
    // Declara uma variável para armazenar o nível do jogador
    let nivel;
    // Verifica o intervalo de vitórias para determinar o nível
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
    // Retorna um objeto com o saldo e o nível do jogador
    return {saldo: saldo, nivel: nivel};
  }
  
  // Cria uma variável para receber o resultado da função
  let resultado = calculaSaldo(75, 50);
  
  // Exibe uma mensagem com o resultado
  console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
  