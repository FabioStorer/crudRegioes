const prompt = require('prompt-sync')();
const paises = [];

const verificarNome = nome => nome == '';

const verificarNumero = numero => numero < 0 || isNaN(numero);

const modeloPais = () => {

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

    return pais

};

const cadastroPaises = () => {

    let pais = modeloPais();

    paises.push(pais);
    console.log('Escolha uma nova opção:');
    console.log(paises);

};

const listaPaises = () => {

    if (paises.length == 0) {
        console.log('Nenhum país cadastrado.');
        return false
    } else {
        console.log(paises)
        paises.forEach((pais, i) => {
            console.log(`${i + 1}, Nome do País: ${pais.nome}, Continente: ${pais.continente}, Número de Estados: ${pais.nEstados}, Regiões: ${pais.regioes}, População: ${pais.populacao}.`);
        });
        return true
    }
};

const atualizarPais = () => {

    if (listaPaises()) {
        const indice = prompt('Escolha pelo índice qual país deseja atualizar: ') - 1;

        if (verificarNumero(indice)) {
            console.log('Insira um número por favor.');
        } else {
            const pais = modeloPais();
            paises[indice] = pais;
        }
    }
};

const removerPais = () => {

    if (listaPaises()) {
        let indice = prompt('Escolha pelo índice qual país deseja remover: ');

        paises.splice(indice - 1, 1);
    }
};

module.exports = {
    cadastroPaises,
    listaPaises,
    atualizarPais,
    removerPais
};