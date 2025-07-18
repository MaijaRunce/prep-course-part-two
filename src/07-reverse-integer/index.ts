/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

const reverse = (int: number) => {
  const isNegative = int < 0;
  const cleanInt = isNegative ? int * -1 : int;
  const original = cleanInt.toString();
  const result = original
    .split("")
    .reduce((reversed, char) => char + reversed, "");
  return isNegative ? Number("-" + result) : Number(result);
};

export { reverse };
