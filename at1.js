// Solicita os dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Realiza as operações
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero2 !== 0 ? numero1 / numero2 : "Divisão por zero não é permitida";

// Exibe os resultados
console.log("Soma: " + soma);
 console.log("Subtração: " + subtracao);
 console.log("Multiplicação: " + multiplicacao);
 console.log("Divisão: " + divisao);


