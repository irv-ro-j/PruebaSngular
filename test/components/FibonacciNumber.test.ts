import { FibonacciNumber } from '../../src/components/FibonacciNumber';

describe('Testing FibonacciNumber function', () => {

    const Fibonacci = new FibonacciNumber();

    test('Validate the first ten fibonacci numbers', () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        for (let i = 0; i < 10; i++) {
            expect(Fibonacci.get(i)).toBe(expected[i]);
        }
        expect(Fibonacci.get(97)).toBe(83621143489848422977);
    })

    test('If n < 0 or not is a natural number should raise exception', () => {
        expect(() => Fibonacci.get(-1)).toThrowError('n must be positive or zero');
        expect(() => Fibonacci.get(5.5)).toThrowError('n must be a natural number');
    })
})