// Solicita as duas palavras ao usuário
let palavra1 = prompt("Digite a primeira palavra:");
let palavra2 = prompt("Digite a segunda palavra:");

// Função para ordenar as letras de uma palavra
function ordenarPalavra(palavra) {
    return palavra.split('').sort().join('');
}

// Verifica se as palavras são anagramas
if (ordenarPalavra(palavra1) === ordenarPalavra(palavra2)) {
  console.log("A segunda palavra é um anagrama da primeira.");
} else {
  console.log("A segunda palavra não é um anagrama da primeira.");
}

