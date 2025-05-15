// Solicita a força e a distância ao usuário
let forca = parseFloat(prompt("Digite a força aplicada (em N):"));
let distancia = parseFloat(prompt("Digite a distância percorrida (em metros):"));

// Calcula o trabalho
let trabalho = forca * distancia;

// Exibe o resultado
console.log("O trabalho realizado é: " + trabalho.toFixed(2) + " J");

