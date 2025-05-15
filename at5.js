// Solicita os coeficientes a, b e c ao usuário
let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));

// Calcula o discriminante (Δ)
let delta = (b * b) - (4 * a * c);

// Verifica se as raízes são reais
if (delta >= 0) {
    // Calcula as duas raízes
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Exibe as raízes
    console.log("As raízes da equação são: " + raiz1.toFixed(2) + " e " + raiz2.toFixed(2));
} else {
    console.log("A equação não possui raízes reais.");
}


