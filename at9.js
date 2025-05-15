
// Solicita a largura e o comprimento ao usuário
let largura = parseFloat(prompt("Digite a largura do retângulo:"));
let comprimento = parseFloat(prompt("Digite o comprimento do retângulo:"));

// Calcula o perímetro e a área
let perimetro = 2 * (largura + comprimento);
let area = largura * comprimento;

// Exibe os resultados
console.log("O perímetro do retângulo é: " + perimetro.toFixed(2) + "\nA área do retângulo é: " + area.toFixed(2));



