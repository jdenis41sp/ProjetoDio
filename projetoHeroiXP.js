// Variável para armazenar o nome e a quantidade de experiência (XP) de um herói
var nome = "John Connor"; 
var xp = 9500; 

var nivel; 
switch (true) { 
  case xp < 1000: // Se XP for menor do que 1.000
    nivel = "Ferro"; // O nível é Ferro
    break; 
  case xp >= 1000 && xp <= 2000: // Se XP for entre 1.001 e 2.000
    nivel = "Bronze"; // O nível é Bronze
    break; 
  case xp >= 2001 && xp <= 5000: // Se XP for entre 2.001 e 5.000
    nivel = "Prata"; // O nível é Prata
    break; 
  case xp >= 6001 && xp <= 7000: // Se XP for entre 6.001 e 7.000
    nivel = "Ouro"; // O nível é Ouro
    break; 
  case xp >= 7001 && xp <= 8000: // Se XP for entre 7.001 e 8.000
    nivel = "Platina"; // O nível é Platina
    break; 
  case xp >= 8001 && xp <= 9000: // Se XP for entre 8.001 e 9.000
    nivel = "Ascendente"; // O nível é Ascendente
    break; 
  case xp >= 9001 && xp <= 10000: // Se XP for entre 9.001 e 10.000
    nivel = "Imortal"; // O nível é Imortal
    break; 
  case xp >= 10001: // Se XP for maior ou igual a 10.001
    nivel = "Radiante"; // O nível é Radiante
    break; 
}


console.log("O Herói de nome " + nome + " está no nível de " + nivel);