import { InvalidNumberError } from "./Errors";

export class TriangularNumber {
    private static instance: TriangularNumber;

    constructor() {
        if (TriangularNumber.instance) {
            return TriangularNumber.instance;
        }
        TriangularNumber.instance = this;
    }

    get_nth(n: number) {
        this.validate(n);

        return n * (n + 1) / 2;
    }

    private validate(n: number) {
        const isNaturalNumber = Number.isInteger(n);
        const isZeroOrLess = n <= 0;

        if (!isNaturalNumber || isZeroOrLess) throw new InvalidNumberError('n must be a natural number greater than zero');
    }
}