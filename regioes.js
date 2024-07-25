const prompt = require('prompt-sync')();
const paises = [];
const estados = [];
const municipios = [];

const verificarNome = nome => nome == '';

const verificarNumero = numero => numero < 0 || isNaN(numero);

const cadastroPaises = () => {

    let pais = {};

    while (true) {

        pais.nome = prompt('Insira o nome do país: ');

        if (verificarNome(pais.nome)) {
            console.log('Insira um nome válido.');
        } else {
            break;
        }
    };

    while (true) {

        pais.continente = prompt('Insira o continente ao qual esse país pertence: ');

        if (verificarNome(pais.continente)) {
            console.log('Insira um nome válido.');
        } else {
            break;
        }
    };

    while (true) {

        pais.nEstados = prompt('Insira a quantidade de estados que esse país possui: ');

        if (verificarNumero(pais.nEstados)) {
            console.log('Insira um número válido.');
        } else {
            break;
        }
    };

    while (true) {

        pais.regioes = prompt('Quantas regiões esse país possui? Caso não possua, digite "nao". ');

        if (pais.regioes == 'nao') {
            break;
        }
        if (verificarNumero(pais.regioes)) {
            console.log('Insira um número válido.');
        } else {
            break;
        }
    };

    while (true) {

        pais.populacao = prompt('Insira a quantidade de pessoas que vivem nesse município: ');

        if (verificarNumero(pais.populacao)) {
            console.log('Insira um número por favor.');
        } else {
            break;
        }
    };

    paises.push(pais);
    console.log('Escolha uma nova opção:');
    console.log(paises);

};

const cadastroEstados = () => {

    let estado = {};

    while (true) {

        estado.nome = prompt('Insira o nome do estado: ');

        if (verificarNome(estado.nome)) {
            console.log('Insira um nome válido.');
        } else {
            break;
        }
    };

    while (true) {

        estado.uf = prompt('Insira a UF do estado: ');

        if (verificarNome(estado.uf)) {
            console.log('Insira uma UF válida.');
        } else {
            break;
        }
    };

    while (true) {

        estado.qMunicipios = prompt('Insira a quantidade de municípios desse estado: ');

        if (verificarNumero(estado.qMunicipios)) {
            console.log('Insira um número por favor.');
        } else {
            break;
        }
    };

    while (true) {

        estado.populacao = prompt('Insira a quantidade de pessoas que vivem nesse município: ');

        if (verificarNumero(estado.populacao)) {
            console.log('Insira um número por favor.');
        } else {
            break;
        }
    };

    estados.push(estado);
    console.log('Escolha uma nova opção:');
    console.log(estados);

};

const cadastroMunicipio = () => {

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

    municipios.push(municipio);
    console.log('Escolha uma nova opção.');
    console.log(municipios);
};

const listaPaises = () => {

    paises.forEach((pais, i) => {

        console.log(`${i + 1}, Nome do País: ${pais.nome}, Continente: ${pais.continente}, Número de Estadus: ${pais.nEstados}, Regiões: ${pais.regioes}, População: ${pais.populacao}.`);
    });
};

const listaEstados = () => {

    estados.forEach((estado, i) => {

        console.log(`${i + 1}, Nome do Estado: ${estado.nome}, UF: ${estado.uf}, Quantidade de municípios ${estado.qMunicipios}, População: ${estado.populacao}.`);
    });
};

const listaMunicipios = () => {

    municipios.forEach((municipio, i) => {

        console.log(`${i + 1}, Nome do Município: ${municipio.nome}, Quantidade de Bairros: ${municipio.qBairros}, População: ${municipio.populacao}.`);
    });
};

const atualizarPais = () => {

    while (true) {

        listaPaises();

        let opcao = prompt('Escolha pelo índice qual país deseja atualizar: ');

        if (verificarNumero(opcao)) {
            console.log('Insira um número por favor.');
        } else {
            break;
        }
        
    };
};

module.exports = {
    cadastroPaises,
    cadastroEstados,
    cadastroMunicipio,
    listaPaises,
    listaEstados,
    listaMunicipios,
};