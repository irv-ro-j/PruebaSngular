import { PrimeNumber } from './PrimeNumber';
import { FibonacciNumber } from './FibonacciNumber';
import { TriangularNumber } from './TriangularNumber';
import { InvalidNumberError, NthSngularNumberErrorValidator } from './Errors';

export class SngularNumber {
    private static instance: SngularNumber;

    constructor() {
        if (SngularNumber.instance) {
            return SngularNumber.instance;
        }
        SngularNumber.instance = this;
    }

    get_nth(n: number): number | undefined {
        this.validate(n);

        return this.sngularSeriesFormule(n);
    }

    sngularSeriesFormule(n: number): number | undefined {
        const prime = new PrimeNumber();
        const fibonacci = new FibonacciNumber();
        const triangular = new TriangularNumber();
        
        if ([1, 2].includes(n)) return undefined;
        
        if (fibonacci.get_nth(n - 2) == 0) {
            return Infinity;
        }

        const tTriangular = triangular.get_nth(n + 2)
        const tPrime =  prime.get_nth(n - 1)
        const tFibonacci =  fibonacci.get_nth(n - 2)
        
        // console.log(`n= ${n}:  ${tTriangular} * ${tPrime} / ${tFibonacci}`)
        return tTriangular * tPrime / tFibonacci;
    }

    private validate(n: number) {
        const isNaturalNumber = Number.isInteger(n);
        const isZeroOrLess = n <= 0;

        if (!isNaturalNumber || isZeroOrLess) throw new InvalidNumberError('n must be a natural number greater than zero');
    }
}