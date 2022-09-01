import { TriangularNumber } from '../../src/components/TriangularNumber';

describe('Testing TriangularNumber function', () => {

    const Triangular = new TriangularNumber();

    test('Validate the first ten triangular numbers', () => {
        const expected = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

        for (let i = 1; i <= 10; i++) {
            expect(Triangular.get_nth(i)).toBe(expected[i - 1]);
        }
    })

    test('If n <= 0 or not is a natural number should raise exception', () => {
        expect(() => Triangular.get_nth(1.5)).toThrowError('n must be a natural number greater than zero');
        expect(() => Triangular.get_nth(0)).toThrowError('n must be a natural number greater than zero');
        expect(() => Triangular.get_nth(-1)).toThrowError('n must be a natural number greater than zero');
    })
})