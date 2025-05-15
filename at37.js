let a = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let b = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let c = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

if (a + b > c && a + c > b && b + c > a) {
    console.log("Os números podem ser os lados de um triângulo.");
} else {
    console.log("Os números não podem ser os lados de um triângulo.");
}

