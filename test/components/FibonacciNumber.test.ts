import { FibonacciNumber } from '../../src/components/FibonacciNumber';

describe('Testing FibonacciNumber function', () => {

    test('Validate the first ten fibonacci numbers', () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        for (let i = 0; i < 10; i++) {
            expect(FibonacciNumber(i)).toBe(expected[i]);
        }
    })

    test('If n < 0 or not is a natural number should raise exception', () => {
        expect(() => FibonacciNumber(-1)).toThrowError('n must be positive or zero');
        expect(() => FibonacciNumber(5.5)).toThrowError('n must be a natural number');
    })
})