const { somaMultiplos5ou7 } = require('../functions');
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