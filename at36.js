let i1 = parseInt(prompt("Digite a idade da primeira pessoa:"));
let i2 = parseInt(prompt("Digite a idade da segunda pessoa:"));
let i3 = parseInt(prompt("Digite a idade da terceira pessoa:"));

let maiores = [i1, i2, i3].filter(idade => idade >= 18).length;

if (maiores === 3) {
    console.log("Todas são maiores de idade.");
} else if (maiores > 0) {
    console.log("Algumas são maiores de idade.");
} else {
    console.log("Todas são menores de idade.");
}

