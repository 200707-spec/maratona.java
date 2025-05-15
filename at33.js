let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));
let c = parseFloat(prompt("Digite o terceiro número:"));

let soma = a + b + c;

if (soma % 5 === 0) {
    console.log("A soma é divisível por 5.");
} else {
    console.log("A soma não é divisível por 5.");
}

