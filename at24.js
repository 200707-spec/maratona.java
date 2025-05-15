// Solicita uma palavra ao usuário
let palavra = prompt("Digite uma palavra:");

// Conta as vogais
let contadorVogais = palavra.match(/[aeiouAEIOU]/g) ? palavra.match(/[aeiouAEIOU]/g).length : 0;

// Exibe o resultado
console.log("A quantidade de vogais na palavra é: " + contadorVogais);


