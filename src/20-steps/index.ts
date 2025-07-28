/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

const steps = (n: number) => {
  for (let i: number = 0; i < n; i++) {
    let row: string = "";
    for (let j: number = 0; j <= i; j++) {
      row += "#"
    }

    const spaces = n - i - 1
    console.log(row + " ".repeat(spaces < 0 ? 0 : spaces));
  }
};

export { steps };
