let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));
let c = parseFloat(prompt("Digite o terceiro número:"));

let soma = a + b + c;

if (soma > 0) {
    console.log("A soma é positiva.");
} else if (soma < 0) {
    console.log("A soma é negativa.");
} else {
    console.log("A soma é zero.");
}

