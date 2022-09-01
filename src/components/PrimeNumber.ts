import { InvalidNumberError } from "./Errors";

export class PrimeNumber {
    private sequence: Array<number> = [];
    private checkedNumbersMemory = new Map<number, number>();
    private static instance: PrimeNumber;

    constructor() {
        if (PrimeNumber.instance) {
            return PrimeNumber.instance;
        }
        PrimeNumber.instance = this;
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
        let calculatedNumbersLength = this.sequence.length;
        for (let numberToCheck = this.checkedNumbersMemory.size; calculatedNumbersLength < nthRequiredNumber; numberToCheck++) {
            if (this.is_prime(numberToCheck)) {
                this.sequence.push(numberToCheck);
                calculatedNumbersLength++;
            }
            this.checkedNumbersMemory.set(numberToCheck, numberToCheck);
        }
    }

    is_prime(n: number): boolean {
        let isLessThanTwo
        let isTwoOnlyEvenPrime
        let isEven

        isLessThanTwo = n < 2;
        if (isLessThanTwo) return false;
        
        isTwoOnlyEvenPrime = n === 2;
        if (isTwoOnlyEvenPrime) return true;
        
        isEven = n % 2 === 0;
        if (isEven) return false;


        let i = 3;
        let maxFactorValue = Math.sqrt(n);
        while (i <= maxFactorValue) {
            if (n % i === 0) {
                return false;
            }
            i += 2;
        }
        return true;
    }

    private validate(n: number) {
        const isNaturalNumber = Number.isInteger(n);
        const isZeroOrLess = n <= 0;

        if (!isNaturalNumber || isZeroOrLess) throw new InvalidNumberError('n must be a natural number greater than zero');
    }
}