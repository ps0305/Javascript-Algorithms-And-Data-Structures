/**
 * @param {string} s
 * @return {string}
 */
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

var reverseVowels = function(s) {
  const str = s.split('');
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (!vowels.has(s[i].toLowerCase()) && i < j) {
      i += 1;
    }
    while (!vowels.has(s[j].toLowerCase()) && j > i) {
      j -= 1;
    }
    if (i < j) {
      [str[i], str[j]] = [str[j], str[i]];
    }
    i += 1;
    j -= 1;
  }
  return str.join('');
};
