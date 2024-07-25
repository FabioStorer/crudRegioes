const prompt = require('prompt-sync')();
const funcao = require('./regioes.js');

console.log(`Bem-vindo ao cadastro de regiões. Escolha uma opção de cadastro:`);
while (true) {

    console.log(`
    1. Cadastro.
    2. Listagem.
    3. Atualização.
    4. Remoção.
    5. Finalizar.`);
    let opcao = Number(prompt());

    switch (opcao) {

        case 1:

            console.log(`
    1. Cadastrar um País.
    2. Cadastrar um Estado.
    3. Cadastrar um Município.`);
            opcao = Number(prompt());

            switch (opcao) {

                case 1:

                    funcao.cadastroPaises();

                    break;

                case 2:

                    funcao.cadastroEstados();

                    break;

                case 3:

                    funcao.cadastroMunicipio();

                    break;

                default:

                    console.log('Opção inválida.');

                    break;
            };

            break;

        case 2:

            console.log(`
                        1. Lista de Paises.
                        2. Lista de Estados.
                        3. Lista de Municípios.`);
            opcao = Number(prompt());

            switch (opcao) {

                case 1:

                    funcao.listaPaises();

                    break;

                case 2:

                    funcao.listaEstados();

                    break;


                case 3:

                    funcao.listaMunicipios();

                    break;


                default:

                    console.log('Opção inválida.');

                    break;
            }

            break;

        case 3:


            console.log(`
        1. Atualizar Pais.
        2. Atualizar Estado.
        3. Atualizar Município.`);
            opcao = Number(prompt());

            switch (opcao) {

                case 1:

                    funcao.atualizarPais();

                    break;

                case 2:



                    break;


                case 3:

                    break;



                default:
                    break;
            }

            break;

        case 4:



            break;

        case 5:

            process.exit();

            break;

        default:

            console.log('Opção inválida.');

            break;
    };
};