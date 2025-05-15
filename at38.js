let anoNascimento = parseInt(prompt("Digite o ano de nascimento da pessoa:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log("Você está apto a votar.");
} else {
    console.log("Você não está apto a votar.");
}

