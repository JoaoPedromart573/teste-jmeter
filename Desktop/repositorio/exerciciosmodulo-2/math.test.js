const { soma, dobro } = require('./math');

describe('funções matemáticas', () => {
    beforeAll(() => {
        console.log('Antes de tudo');
    });

    beforeEach(() => {
        console.log('Antes de cada teste');
    });

    afterEach(() => {
        console.log('Depois de cada teste');
    });

    afterAll(() => {
        console.log('Depois de tudo');
    });

    it('soma de dois valores', () => {
        expect(soma(2, 5)).toBe(7);
        expect(soma(2, 4)).toBe(6);
        expect(soma(30, 40)).toBe(70);
    });
    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8);
    });

});
