import { SngularNumber } from '../../src/components/SngularNumber';

describe('Test SngularNumber', () => {
    const Sngular = new SngularNumber();

    test('Only accept natural numbers greater than 0', () => {
        expect(() => Sngular.get_nth(1.5)).toThrowError('n must be a natural number greater than zero');
        expect(() => Sngular.get_nth(0)).toThrowError('n must be a natural number greater than zero');
        expect(() => Sngular.get_nth(-1)).toThrowError('n must be a natural number greater than zero');
    });

    test('Sngular get_nth get valid values', () => {
        const expected = [
            undefined,
            undefined,
            Infinity,
            105,
            196,
            198,
            195,
            187,
            156.75,
            138,
            125.66666666666667,
            95.73529411764706,
        ]
        for (let i = 1; i < 10; i++) {
            expect(Sngular.get_nth(i)).toBe(expected[i - 1]);
        }
    })
})