class InvalidNumberError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidNumberError";
    }
}

class TriangularNumberValidator {
    static validate(n: number) {
        if (n <= 0) {
            throw new InvalidNumberError('n must be greater than 0');
        }
        if (!Number.isInteger(n)) {
            throw new InvalidNumberError('n must be a natural number');
        }
    }
}

export const TriangularNumber = (n: number) => {
    TriangularNumberValidator.validate(n);

    return n * (n + 1) / 2;
}