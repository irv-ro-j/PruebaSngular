import { InvalidNumberError } from "./Errors";


export class FibonacciNumber {
    succession = [0, 1];

    private static instance: FibonacciNumber;

    constructor() {
        if (FibonacciNumber.instance) {
            return FibonacciNumber.instance;
        }
        FibonacciNumber.instance = this;
    }
    
    get(n: number): number {
        this.validate(n);
        
        if (n < this.succession.length) {
            return this.succession[n];
        }
    
        for (let i = this.succession.length; i <= n; i++) {
            const next = this.succession[i - 1] + this.succession[i - 2];
            this.succession.push(next);
        }
    
        return this.succession[n];
    }

    validate(n: number) {
        if (n < 0) {
            throw new InvalidNumberError("n must be positive or zero");
        }
        if (!Number.isInteger(n)) {
            throw new InvalidNumberError('n must be a natural number');
        }
    }
}