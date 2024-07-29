const prompt = require('prompt-sync')();
const funcaoPais = require('./pais.js');
const funcaoEstado = require('./estado.js');
const funcaoMunicipio = require('./municipio.js');

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

                    funcaoPais.cadastroPaises();

                    break;

                case 2:

                    funcaoEstado.cadastroEstados();

                    break;

                case 3:

                    funcaoMunicipio.cadastroMunicipio();

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

                    funcaoPais.listaPaises();

                    break;

                case 2:

                    funcaoEstado.listaEstados();

                    break;


                case 3:

                    funcaoMunicipio.listaMunicipios();

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

                    funcaoPais.atualizarPais();

                    break;

                case 2:

                    funcaoEstado.atualizarEstado();

                    break;


                case 3:

                    funcaoMunicipio.atualizarMunicipio();

                    break;

                default:

                    console.log('Opção inválida.');

                    break;
            }

            break;

        case 4:

            console.log(`
        1. Remover Pais.
        2. Remover Estado.
        3. Remover Município.`);
            opcao = Number(prompt());

            switch (opcao) {

                case 1:

                    funcaoPais.removerPais();

                    break;

                case 2:

                    funcaoEstado.removerEstado();

                    break;

                case 3:

                    funcaoMunicipio.removerMunicipio();

                    break;

                default:
                    break;
            }

            break;

        case 5:

            process.exit();

            break;

        default:

            console.log('Opção inválida.');

            break;
    };
};