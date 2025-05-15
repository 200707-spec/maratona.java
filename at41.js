
let dia = prompt("Digite o nome de um dia da semana (exemplo: segunda-feira):").toLowerCase();

if (["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"].includes(dia)) {
    console.log("É um dia útil.");
} else if (["sábado", "domingo"].includes(dia)) {
    console.log("É um dia de fim de semana.");
} else {
    console.log("Dia inválido.");
}



