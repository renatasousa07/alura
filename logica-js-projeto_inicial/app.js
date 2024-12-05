alert('Boas-vindas ao jogo do Número Secreto');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// Se o chute for igual ao número secreto 
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto! ${numeroSecreto}`);
} else {
    alert('Você Errou :(');
}