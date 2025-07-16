/**
 * Is Even
 *
 * Determine if given number is even
 * without using any mathematic operators ( +, -, %, /, Math, ParseInt etc.)
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */


const isEven = (n: number) => (n & 1) === 0 ;

export { isEven };
