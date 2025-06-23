const mdc = require('./functions/functions/mdc');
const indicesMaiorMenor = require('./functions/functions/indicesMaiorMenor');
const somaMultiplos5ou7 = require('./functions/functions/somaMultiplos5ou7');

// MDC
console.log("MDC de 24 e 18:", mdc(24, 18));

// Índices do maior e menor valor
let arr = [8, 13, 2, 44, 3, 21];
console.log("Índices:", indicesMaiorMenor(arr));

// Soma de múltiplos
console.log("Soma dos múltiplos de 5 ou 7 abaixo de 1000:", somaMultiplos5ou7(1000));