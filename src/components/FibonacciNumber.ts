import { InvalidNumberError } from "./Errors";


export class FibonacciNumber {
    private sequence = [0, 1];
    private static instance: FibonacciNumber;

    constructor() {
        if (FibonacciNumber.instance) {
            return FibonacciNumber.instance;
        }
        FibonacciNumber.instance = this;
    }

    get_nth(nthNumber: number): number {
        this.validate(nthNumber);

        if (nthNumber > this.sequence.length) {
            this.addSequenceNumbersToReachNth(nthNumber);            
        }
    
        const nthRequiredNumberPosition = nthNumber - 1;
        return this.sequence[nthRequiredNumberPosition];
    }

    private addSequenceNumbersToReachNth(nthRequiredNumber: number) {
        for (let nth = this.sequence.length; nth <= nthRequiredNumber; nth++) {
            const newNthNumber = this.sequence[nth - 1] + this.sequence[nth - 2];
            this.sequence.push(newNthNumber);
        }
    }

    private validate(n: number) {
        const isNaturalNumber = Number.isInteger(n);
        const isZeroOrLess = n <= 0;

        if (!isNaturalNumber || isZeroOrLess) throw new InvalidNumberError('n must be a natural number greater than zero');
    }
}