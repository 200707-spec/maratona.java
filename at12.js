// Solicita a massa e a velocidade ao usuário
let massa = parseFloat(prompt("Digite a massa do objeto (em kg):"));
let velocidade = parseFloat(prompt("Digite a velocidade do objeto (em m/s):"));

// Calcula a energia cinética
let energiaCinetica = (massa * Math.pow(velocidade, 2)) / 2;

// Exibe o resultado
console.log("A energia cinética do objeto é: " + energiaCinetica.toFixed(2) + " J");

