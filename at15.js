// Solicita o raio da esfera
let raioEsfera = parseFloat(prompt("Digite o raio da esfera (em metros):"));

// Calcula o volume da esfera
let volumeEsfera = (4 / 3) * Math.PI * Math.pow(raioEsfera, 3);

// Exibe o resultado
console.log("O volume da esfera é: " + volumeEsfera.toFixed(2) + " m³");


