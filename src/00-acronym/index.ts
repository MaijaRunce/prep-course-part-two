/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  const basicLetterRegex = /^[a-zA-Z]$/;

  return input
    .split(" ")
    .map((input) => {
      const jaunsMainigais = input.split("-");
      let answer = ""
      for (const mainigais of jaunsMainigais) {
        if (basicLetterRegex.test(mainigais[0])) {
           answer += mainigais[0];
           continue
        }

        if (basicLetterRegex.test(mainigais[1])) {
           answer += mainigais[1];
           continue
        }
      }

      return answer;
    })
    .join("")
    .toUpperCase();
}

export { parse };
