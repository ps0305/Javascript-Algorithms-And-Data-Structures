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
  const output = new Set();
  for (let i = 0; i <= s.length - length; i++) {
    const counts = {};
    let n = 0;
    let left = i;
    for (let j = i; j < s.length; j++) {
      const w = s.slice(j, j + length);
      if (dict[w]) {
        while ((counts[w] || 0) + 1 > dict[w]) {
          const lw = s.slice(left, left + length);
          counts[lw] -= 1;
          n -= 1;
          left += length;
        }
        counts[w] = (counts[w] || 0) + 1;
        n += 1;
        if (n === words.length) {
          output.add(left);
        }
        j += length - 1;
      } else {
        break;
      }
    }
  }
  return [...output].sort();
};
