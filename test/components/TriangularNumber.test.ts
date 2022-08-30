import { TriangularNumber } from '../../src/components/TriangularNumber';

describe('Testing TriangularNumber function', () => {

    test('Validate the first ten triangular numbers', () => {
        const expected = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

        for (let i = 1; i <= 10; i++) {
            expect(TriangularNumber(i)).toBe(expected[i - 1]);
        }
    })

    test('If n <= 0 or not is a natural number should raise exception', () => {
        expect(() => TriangularNumber(0)).toThrowError('n must be greater than 0');
        expect(() => TriangularNumber(5.5)).toThrowError('n must be a natural number');
    })
})