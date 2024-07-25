const prompt = require('prompt-sync')();
const funcao = require('./regioes.js');

console.log(`Bem-vindo ao cadastro de regiões. Escolha uma opção de cadastro:`);
while (true) {

    console.log(`
    1. Cadastrar um País.
    2. Cadastrar um Estado.
    3. Cadastrar um Município.
    4. Finalizar.`);
    let opcao = Number(prompt());

    switch (opcao) {
        case 1:

            funcao.cadastroPaises()

            break;

        case 2:

            funcao.cadastroEstados()

            break;

        case 3:

            funcao.cadastroMunicipio()

            break;

        case 4:

            process.exit();

            break;

        default:

            console.log('Opção inválida.');

            break;
    }
};