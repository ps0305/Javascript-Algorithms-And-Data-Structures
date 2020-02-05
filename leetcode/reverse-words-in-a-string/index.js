/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue;
    }
    const word = extract(s, i);
    words.push(word);
    i += word.length - 1;
  }
  return words.reverse().join(' ');
};

function extract(s, start) {
  let i = start;
  while (i < s.length && s[i] !== ' ') {
    i += 1;
  }
  return s.substring(start, i);
}
