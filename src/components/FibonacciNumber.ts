import { InvalidNumberError } from "./Errors";

class FibonacciNumberValidator {
    static validate(n: number) {
        if (n < 0) {
            throw new InvalidNumberError("n must be positive or zero");
        }
        if (!Number.isInteger(n)) {
            throw new InvalidNumberError('n must be a natural number');
        }
    }
}

export const FibonacciNumber = ( n: number ) => {
    FibonacciNumberValidator.validate(n);

    if (n === 0) return 0;
    if (n === 1) return 1;
    
    const fibonacciNumberByBinetFormule = (Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5);

    return Math.round(fibonacciNumberByBinetFormule);
};