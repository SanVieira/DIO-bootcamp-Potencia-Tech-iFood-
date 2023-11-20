let nomeHeroi = "SanTiago";
let quantidadeXP = 4677;


//Não consegui rodar o método "prompt" pelo terminal ou outra forma de entrada.
//Por já atribuí valores às variáveis.
 
/* 
nomeHeroi = prompt("Insira  nome do seu herói: ");
quantidadeXP = prompt("Insira a quantidade de experiência so seu herói: "); 
*/

if (quantidadeXP < 1000) console.log(`O Herói de nome ${nomeHeroi} está no nível Ferro.`);
else if (quantidadeXP >= 1000 && quantidadeXP < 2000) console.log(`O Herói de nome ${nomeHeroi} está no nível Bronze.`);
else if (quantidadeXP >= 2000 && quantidadeXP < 5000) console.log(`O Herói de nome ${nomeHeroi} está no nível Prata.`);
else if (quantidadeXP >= 5000 && quantidadeXP < 7000) console.log(`O Herói de nome ${nomeHeroi} está no nível Ouro.`);
else if (quantidadeXP >= 7000 && quantidadeXP < 8000) console.log(`O Herói de nome ${nomeHeroi} está no nível Platina.`);
else if (quantidadeXP >= 8000 && quantidadeXP < 9000) console.log(`O Herói de nome ${nomeHeroi} está no nível Ascendente.`);
else if (quantidadeXP >= 9000 && quantidadeXP < 10000) console.log(`O Herói de nome ${nomeHeroi} está no nível Imortal.`);
else if (quantidadeXP >= 10000) console.log(`O Herói de nome ${nomeHeroi} está no nível Radiante.`);
else console.log("Erro inesperado. Tente novamente!");