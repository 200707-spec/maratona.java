let idade = parseInt(prompt("Digite sua idade:"));

if (idade < 16) {
    console.log("Você não está apto a votar.");
} else if ((idade >= 16 && idade <= 17) || idade >= 70) {
    console.log("Você está apto a votar, mas não é obrigatório.");
} else {
    console.log("Você está apto e é obrigado a votar.");
}





