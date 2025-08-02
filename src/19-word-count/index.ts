/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */
class Words {
  count(str: string): Record<string, number> {
    const obj = Object.create(null);

    str.trim().split(/\s+/).forEach((el) => {
      const word = el.toLowerCase();
      obj[word] = obj[word] ? obj[word] + 1 : 1;
    });

    return obj;
  }
}

export { Words };



