let vitorias = 47;
let derrotas = 23;
let nivel;

function saldoVitorias(numeroVitorias, numeroDerrotas) {
    let aux = numeroVitorias - numeroDerrotas;
    return aux;
}

let resultado = saldoVitorias(vitorias, derrotas);

if (resultado < 10) nivel = "Ferro";
else if (resultado >= 10 && resultado < 20) nivel = "Bronze";
else if (resultado >= 20 && resultado < 50) nivel = "Prata";
else if (resultado >= 50 && resultado < 80) nivel = "Ouro";
else if (resultado >= 80 && resultado < 90) nivel = "Diamante";
else if (resultado >= 90 && resultado <= 100) nivel = "Lendário";
else if (resultado > 100) nivel = "Imortal";
else console.log("Erro no cálculo...");

console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível " + nivel);



