// Solicita uma palavra ao usuário
let palavra = prompt("Digite uma palavra:");

// Verifica se a palavra é igual ao seu reverso
let palavraReversa = palavra.split('').reverse().join('');
if (palavra === palavraReversa) {
    console.log("A palavra é um palíndromo.");
} else {
  console.log("A palavra não é um palíndromo.");
}


