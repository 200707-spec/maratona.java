// Solicita as coordenadas dos dois pontos
let x1 = parseFloat(prompt("Digite a coordenada x do primeiro ponto:"));
let y1 = parseFloat(prompt("Digite a coordenada y do primeiro ponto:"));
let x2 = parseFloat(prompt("Digite a coordenada x do segundo ponto:"));
let y2 = parseFloat(prompt("Digite a coordenada y do segundo ponto:"));

// Calcula a distância entre os pontos
let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Exibe o resultado
console.log("A distância entre os dois pontos é: " + distancia.toFixed(2) + " unidades.");


