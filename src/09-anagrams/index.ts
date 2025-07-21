/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */
//  .reduce((reversed, char) => char + reversed, "");

const anagrams = (stringA: string, stringB: string): boolean => {
  const sortedS = stringA
    .split("")
    .filter((n) => n !== "!")
    .sort()
    .join("")
    .toUpperCase();
  const sortedT = stringB
    .split("")
    .filter((n) => n !== "!")
    .sort()
    .join("")
    .toUpperCase();


  return sortedS === sortedT;
};
export { anagrams };
