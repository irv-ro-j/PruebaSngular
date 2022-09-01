import { FibonacciNumber } from '../../src/components/FibonacciNumber';

describe('Testing FibonacciNumber function', () => {

    const Fibonacci = new FibonacciNumber();

    test('Only can be created one instance of FibonacciNumber', () => {
        const Fibonacci2 = new FibonacciNumber();
        expect(Fibonacci).toBe(Fibonacci2);
    });

    test('Validate the first ten fibonacci numbers', () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        for (let i = 1; i <= 10; i++) {
            expect(Fibonacci.get_nth(i)).toBe(expected[i - 1]);
        }
        expect(Fibonacci.get_nth(19)).toBe(2584);
    })

    test("Method get_nth can be called only with natural numbers greaten than zero", () => {        expect(() => Fibonacci.get_nth(-1)).toThrowError('n must be a natural number greater than zero');
        expect(() => Fibonacci.get_nth(1.5)).toThrowError('n must be a natural number greater than zero');
        expect(() => Fibonacci.get_nth(0)).toThrowError('n must be a natural number greater than zero');
        expect(() => Fibonacci.get_nth(-1)).toThrowError('n must be a natural number greater than zero');
    })
})