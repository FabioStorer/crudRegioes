const prompt = require('prompt-sync')();
const paises = [];
const estados = [];
const municipios = [];

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

};

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

};

const cadastroPaises = () => {

    let pais = modeloPais();

    paises.push(pais);
    console.log('Escolha uma nova opção:');
    console.log(paises);

};

const cadastroEstados = () => {

    modeloEstado();

    estados.push(estado);
    console.log('Escolha uma nova opção:');
    console.log(estados);

};

const cadastroMunicipio = () => {

    modeloMunicipio();

    municipios.push(municipio);
    console.log('Escolha uma nova opção.');
    console.log(municipios);
};

const listaPaises = () => {

    if (paises.length == 0) {
        console.log('Nenhum país cadastrado.');
    } else {
        console.log(paises)
        paises.forEach((pais, i) => {
            console.log(`${i + 1}, Nome do País: ${pais.nome}, Continente: ${pais.continente}, Número de Estados: ${pais.nEstados}, Regiões: ${pais.regioes}, População: ${pais.populacao}.`);
        });
    }
};

const listaEstados = () => {

    if (estados.length == 0) {
        console.log('Nenhum estado cadastrado.');
    } else {
        estados.forEach((estado, i) => {
            console.log(`${i + 1}, Nome do Estado: ${estado.nome}, UF: ${estado.uf}, Quantidade de municípios ${estado.qMunicipios}, População: ${estado.populacao}.`);
        });
    }
};

const listaMunicipios = () => {

    if (municipios.length == 0) {
        console.log('Nenhum município cadastrado.');
    } else {
        municipios.forEach((municipio, i) => {
            console.log(`${i + 1}, Nome do Município: ${municipio.nome}, Quantidade de Bairros: ${municipio.qBairros}, População: ${municipio.populacao}.`);
        });
    };
}


const atualizarPais = () => {

    listaPaises();

    const indice = prompt('Escolha pelo índice qual país deseja atualizar: ') - 1;

    if (verificarNumero(indice)) {
        console.log('Insira um número por favor.');
    } else {
        const pais = modeloPais();
        paises[indice] = pais;
    }
};

const atualizarEstado = () => {

    listaEstados();

    let indice = prompt('Escolha pelo índice qual estado deseja atualizar: ');

    if (verificarNumero(indice)) {
        console.log('Insira um número por favor.');
    } else {
        let estado = modeloEstado();
        estados[indice] = estado;
    }
};

const atualizarMunicipio = () => {

    listaMunicipios();

    let indice = prompt('Escolha pelo índice qual município deseja atualizar: ');

    if (verificarNumero(indice)) {
        console.log('Insira um número por favor.');
    } else {
        let municipio = modeloMunicipio();
        municipios[indice] = municipio;
    }
};

const removerPais = () => {

    listaPaises();

    let indice = prompt('Escolha pelo índice qual país deseja remover: ');

    paises.splice(indice - 1, 1);
};

const removerEstado = () => {

    listaEstados();

    let indice = prompt('Escolha pelo índice qual estado deseja remover: ');

    paises.splice(indice - 1, 1);
};

const removerMunicipio = () => {

    listaMunicipios();

    let indice = prompt('Escolha pelo índice qual município deseja remover: ');

    paises.splice(indice - 1, 1);
};

module.exports = {
    cadastroPaises,
    cadastroEstados,
    cadastroMunicipio,
    listaPaises,
    listaEstados,
    listaMunicipios,
    atualizarPais,
    atualizarEstado,
    atualizarMunicipio,
    removerPais,
    removerEstado,
    removerMunicipio
};