let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let notaFinal = (nota1 + nota2 + nota3) / 3;

if (notaFinal >= 7) {
    console.log("Aluno aprovado.");
} else if (notaFinal < 4) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno de recuperação.");
}



