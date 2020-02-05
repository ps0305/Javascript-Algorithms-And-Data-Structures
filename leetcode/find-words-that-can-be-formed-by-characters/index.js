/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const freq = createFreq(chars);
  let output = 0;
  for (const word of words) {
    if (isGood(word, freq)) {
      output += word.length;
    }
  }
  return output;
};

function isGood(word, freq) {
  const count = {};
  for (const c of word) {
    count[c] = (count[c] || 0) + 1;
    if (!(c in freq) || count[c] > freq[c]) {
      return false;
    }
  }
  return true;
}

function createFreq(chars) {
  const freq = {};
  for (const c of chars) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
