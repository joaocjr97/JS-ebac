const { mdc, indicesMaiorMenor, somaMultiplos5ou7 } = require('./exercicios');

describe('mdc', () => {
    test('mdc de 24 e 18 deve ser 6', () => {
        expect(mdc(24, 18)).toBe(6);
    });
    test('mdc de 7 e 3 deve ser 1', () => {
        expect(mdc(7, 3)).toBe(1);
    });
    test('mdc de 20 e 100 deve ser 20', () => {
        expect(mdc(20, 100)).toBe(20);
    });
});

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

describe('somaMultiplos5ou7', () => {
    test('todos os múltiplos de 5 ou 7 menores que 10', () => {
        expect(somaMultiplos5ou7(10)).toBe(12); // 5 + 7 = 12
    });
    test('múltiplos de 5 ou 7 menores que 20', () => {
        expect(somaMultiplos5ou7(20)).toBe(51); // 5 + 7 + 10 + 14 + 15 = 51
    });
    test('múltiplos de 5 ou 7 menores que 1000', () => {
        expect(somaMultiplos5ou7(1000)).toBe(156361); // valor correto
    });
});