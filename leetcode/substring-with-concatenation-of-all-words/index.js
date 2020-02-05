/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || !words.length) {
    return [];
  }
  const dict = {};
  for (let i = 0; i < words.length; i++) {
    dict[words[i]] = (dict[words[i]] || 0) + 1;
  }
  const length = words[0].length;
  const substringLength = length * words.length;
  const output = [];
  for (let i = 0; i <= s.length - length; i++) {
    const counts = {};
    let n = 0;
    for (let j = i; j < i + substringLength; j += length) {
      const w = s.substr(j, length);
      if (!dict[w]) break;
      counts[w] = (counts[w] || 0) + 1;
      n += 1;
      if (counts[w] > dict[w]) break;
      if (n === words.length) {
        output.push(i);
      }
    }
  }
  return output;
};
