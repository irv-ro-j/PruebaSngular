import { PrimeNumber } from '../../src/components/PrimeNumber';

describe('Testing PrimeNumber function', () => {
    const Prime = new PrimeNumber();

    test('Only can be created one instance of PrimeNumber', () => {
        const Prime2 = new PrimeNumber();
        expect(Prime).toBe(Prime2);
    });

    test('Validate the first ten prime numbers', () => {
        const expected = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        for (let i = 1; i < 10; i++) {
            expect(Prime.get_nth(i)).toBe(expected[i - 1]);
        }

        expect(Prime.get_nth(25)).toBe(97);
    });

    test('Validate is_prime method', () => {
        expect(Prime.is_prime(-1)).toBe(false);
        expect(Prime.is_prime(2)).toBe(true);
        expect(Prime.is_prime(3)).toBe(true);
        expect(Prime.is_prime(7)).toBe(true);
        expect(Prime.is_prime(10)).toBe(false);
    });

    test("Method get_nth can't be called only with natural numbers", () => {
        expect(() => Prime.get_nth(1.5)).toThrowError('n must be a natural number greater than zero');
        expect(() => Prime.get_nth(0)).toThrowError('n must be a natural number greater than zero');
        expect(() => Prime.get_nth(-1)).toThrowError('n must be a natural number greater than zero');
    });
})