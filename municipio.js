const prompt = require('prompt-sync')();

const municipios = [];

const verificarNome = nome => nome == '';

const verificarNumero = numero => numero < 0 || isNaN(numero);

const modeloMunicipio = () => {

    let municipio = {};

    while (true) {

        municipio.nome = prompt('Insira o nome do município: ');

        if (verificarNome(municipio.nome)) {
            console.log('Insira um nome válido.');
        } else {
            break;
        }
    };

    while (true) {

        municipio.qBairros = prompt('Insira a quantidade de bairros que esse município possui: ');

        if (verificarNumero(municipio.qBairros)) {
            console.log('Insira um número por favor.');
        } else {
            break;
        }
    };

    while (true) {

        municipio.populacao = prompt('Insira a quantidade de pessoas que vivem nesse município: ');

        if (verificarNumero(municipio.populacao)) {
            console.log('Insira um número por favor.');
        } else {
            break;
        }
    };

    return municipio;

};

const cadastroMunicipio = () => {

    let municipio = modeloMunicipio();

    municipios.push(municipio);
    console.log('Escolha uma nova opção.');
    console.log(municipios);
};

const listaMunicipios = () => {

    if (municipios.length == 0) {
        console.log('Nenhum município cadastrado.');
        return false;
    } else {
        municipios.forEach((municipio, i) => {
            console.log(`${i + 1}
            Nome do Município: ${municipio.nome}
            Quantidade de Bairros: ${municipio.qBairros}
            População: ${municipio.populacao}.`);
        });
        return true;
    };
};

const atualizarMunicipio = () => {

    if (listaMunicipios()) {
        let indice = prompt('Escolha pelo índice qual município deseja atualizar: ') - 1;

        if (verificarNumero(indice)) {
            console.log('Insira um número por favor.');
        } else {
            let municipio = modeloMunicipio();
            municipios[indice] = municipio;
        }
    }
};

const removerMunicipio = () => {

    if (listaMunicipios()) {
        let indice = prompt('Escolha pelo índice qual município deseja remover: ');

        municipios.splice(indice - 1, 1);
    }
};

module.exports = {
    cadastroMunicipio,
    listaMunicipios,
    atualizarMunicipio,
    removerMunicipio
};

