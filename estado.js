const prompt = require('prompt-sync')();

const estados = [];

const verificarNome = nome => nome == '';

const verificarNumero = numero => numero < 0 || isNaN(numero);

const modeloEstado = () => {

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

    return estado;

};

const cadastroEstados = () => {

    modeloEstado();

    estados.push(estado);
    console.log('Escolha uma nova opção:');
    console.log(estados);

};

const listaEstados = () => {

    if (estados.length == 0) {
        console.log('Nenhum estado cadastrado.');
        return false;
    } else {
        estados.forEach((estado, i) => {
            console.log(`${i + 1}
            Nome do Estado: ${estado.nome}
            UF: ${estado.uf}
            Quantidade de municípios ${estado.qMunicipios}
            População: ${estado.populacao}.`);
        });
        return true;
    }
};

const atualizarEstado = () => {

    if (listaEstados()) {
        let indice = prompt('Escolha pelo índice qual estado deseja atualizar: ');

        if (verificarNumero(indice)) {
            console.log('Insira um número por favor.');
        } else {
            let estado = modeloEstado();
            estados[indice] = estado;
        }
    }
};

const removerEstado = () => {

    if (listaEstados()) {
        let indice = prompt('Escolha pelo índice qual estado deseja remover: ');

        paises.splice(indice - 1, 1);
    }
};

module.exports = {
    cadastroEstados,
    listaEstados,
    atualizarEstado,
    removerEstado
};