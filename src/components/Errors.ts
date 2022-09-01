export class InvalidNumberError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidNumberError";
    }
}

export class NthSngularNumberErrorValidator extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NthFibonacciNumberErrorValidator";
    }
}