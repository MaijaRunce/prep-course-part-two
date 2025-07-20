/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const vowels = (s: string): number => {
  const lowerCaseStr = s.toLowerCase();

  const splittedStr = lowerCaseStr.split("");


  const vowels = ["a", "e", "i", "o", "u"];

  return splittedStr.filter((char) => vowels.includes(char)).length;
};
export { vowels };
