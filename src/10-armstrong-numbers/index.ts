/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

const validate =(n: number): boolean => {
    const numString: string = n.toString();
    const numDigits: number = numString.length;

     let sum: number = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit: number = parseInt(numString[i], 10);
        sum += Math.pow(digit, numDigits);
    }

    return sum === n;
}


export { validate };
