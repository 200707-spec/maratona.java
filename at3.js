// Solicita as três notas ao usuário
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calcula a média aritmética
let media = (nota1 + nota2 + nota3) / 3;

// Exibe o resultado
console.log("A média aritmética das notas é: " + media.toFixed(2));  // .toFixed(2) para limitar a 2 casas decimais

