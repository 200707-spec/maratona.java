let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media >= 6) {
    console.log("média:" + media.toFixed(2) + "\nSituação: Aprovado");
} else {
console.log("Média: " + media.toFixed(2) + "\nSituação: Reprovado");
}






