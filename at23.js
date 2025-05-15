// Solicita a frase ao usuário
let frase = prompt("Digite uma frase:");

// Conta a quantidade de espaços em branco
let quantidadeEspacos = frase.split(' ').length - 1;

// Exibe o resultado
console.log("A quantidade de espaços em branco na frase é: " + quantidadeEspacos);


