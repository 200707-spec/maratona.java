// Solicita a variação de espaço e de tempo ao usuário
let deltaS = parseFloat(prompt("Digite a variação de espaço (Δs) em metros:"));
let deltaT = parseFloat(prompt("Digite a variação de tempo (Δt) em segundos:"));

// Calcula a velocidade média
let velocidadeMedia = deltaS / deltaT;

// Exibe o resultado
console.log("A velocidade média é: " + velocidadeMedia.toFixed(2) + " m/s");


