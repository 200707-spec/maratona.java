// Solicita o nome completo ao usuário
let nomeCompleto = prompt("Digite seu nome completo:");

// Divide o nome completo em partes e exibe o último nome primeiro
let nomePartes = nomeCompleto.split(' ');
let sobrenome = nomePartes[nomePartes.length - 1];
console.log("Seu sobrenome é: " + sobrenome);


