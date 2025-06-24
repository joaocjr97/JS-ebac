const { mdc } = require('../functions');
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