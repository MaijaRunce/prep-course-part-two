/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

const maxChar = (str: string) => {
    let maxFreq = 0;
    let maxFreqChar = '';
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let currFreq = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === currChar) {
                currFreq++;
            }
        }
        if (currFreq > maxFreq) {
            maxFreq = currFreq;
            maxFreqChar = currChar;
        }
    }
    return maxFreqChar;
}


export { maxChar };
