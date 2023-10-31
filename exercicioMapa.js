const rl = require('readline-sync');
const recados = {};

//adicionando 3 entradas ao mapa

recados['Alice'] = 'Lembre-se de comprar leite.';
recados['Bob'] = 'Reunião as 15:00 hoje.';
recados['Carol'] = 'Envie o relatorio até o final do dia.';

//Função para receber o recado de alguma pessoa.
function temRecado(nome) {
    recados.get(nome) ? true: false;
}

function getRecado(nome) {
    if (recados[nome]) {
        return `Você tem um recado: ${recados[nome]}`;
    } else {
        return 'Você não tem recados.';
    }
}

/*
const nomeVerificar = 'Alice';
console.log(`Tem recado para ${nomeVerificar}? ${temRecado(nomeVerificar)}`);
const mensagemVerificar = getRecado(nomeVerificar);
console.log(mensagemVerificar);
*/

while(true) {
    const nome = rl.question('Qual o seu nome?'); 
    const mensagem = getRecado(nome);
    console.log(mensagem);
}
