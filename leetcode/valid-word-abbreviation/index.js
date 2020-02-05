/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */

const isNumber = (c) => {
  return /[0-9]/.test(c);
};

const getNumberLength = (str, start) => {
  let i = start;
  while (isNumber(str[i])) {
    i += 1;
  }
  return i - start;
};

var validWordAbbreviation = function(word, abbr) {
  let i = 0;
  let j = 0;
  while (i < word.length && j < abbr.length) {
    if (abbr[j] === '0') {
      return false;
    }
    if (!isNumber(abbr[j])) {
      if (word[i] !== abbr[j]) {
        return false;
      }
      i += 1;
      j += 1;
      continue;
    }
    const l = getNumberLength(abbr, j);
    const n = parseInt(abbr.slice(j, j + l), 10);
    j += l;
    i += n;
  }
  return i === word.length && j === abbr.length;
};
