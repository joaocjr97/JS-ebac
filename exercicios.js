// exercicios.js

// 1. Calcule o MDC (máximo divisor comum) entre dois números
function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 2. Índice do maior e menor valor em um array
function indicesMaiorMenor(array) {
    let maior = array[0], menor = array[0];
    let indMaior = 0, indMenor = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            indMaior = i;
        }
        if (array[i] < menor) {
            menor = array[i];
            indMenor = i;
        }
    }
    return { indiceMaior: indMaior, indiceMenor: indMenor };
}

// 3. Soma de múltiplos de 5 ou 7 abaixo de 1000
function somaMultiplos5ou7(limite) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Exportar as funções para os testes:
module.exports = { mdc, indicesMaiorMenor, somaMultiplos5ou7 };