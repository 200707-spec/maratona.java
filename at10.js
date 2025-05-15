// Solicita os lados e a altura ao usuário
let a = parseFloat(prompt("Digite o lado a do triângulo:"));
let b = parseFloat(prompt("Digite o lado b do triângulo:"));
let c = parseFloat(prompt("Digite o lado c do triângulo:"));
let altura = parseFloat(prompt("Digite a altura relativa ao lado b:"));

// Calcula o perímetro e a área
let perimetroTriangulo = a + b + c;
let areaTriangulo = (b * altura) / 2;

// Exibe os resultados
console.log("O perímetro do triângulo é: " + perimetroTriangulo.toFixed(2) + "\nA área do triângulo é: " + areaTriangulo.toFixed(2));

