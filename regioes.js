const prompt = require('prompt-sync')();
const paises = [];
const estados = [];
const municipios = [];

const verificaOpcao = opcao => {
    if (isNaN(opcao)) console.log('Insira uma opção válida');
};

const cadastro = () => {

    while (true) {

        console.log('Bem-vindo ao cadastro de regiões. Escolha uma opção de cadastro:');
        let opcao = Number(prompt());
        console.log(opcao);
    }
};

module.exports = {
    cadastro,
    verificaOpcao
}