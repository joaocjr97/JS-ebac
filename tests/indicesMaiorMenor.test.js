const { indicesMaiorMenor } = require('../functions');

describe('indicesMaiorMenor', () => {
    test('array [8, 13, 2, 44, 3, 21]', () => {
        const resultado = indicesMaiorMenor([8, 13, 2, 44, 3, 21]);
        expect(resultado).toEqual({ indiceMaior: 3, indiceMenor: 2 });
    });
    test('array [5, 4, 3, 2, 1]', () => {
        const resultado = indicesMaiorMenor([5, 4, 3, 2, 1]);
        expect(resultado).toEqual({ indiceMaior: 0, indiceMenor: 4 });
    });
    test('array [10]', () => {
        const resultado = indicesMaiorMenor([10]);
        expect(resultado).toEqual({ indiceMaior: 0, indiceMenor: 0 });
    });
});