/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const bannedSet = new Set(banned);
  const freq = {};
  let maxFreq = 0;
  let output = '';
  for (let i = 0; i < paragraph.length; i++) {
    let word = '';
    while (/[a-zA-Z]/.test(paragraph[i]) && i < paragraph.length) {
      word += paragraph[i].toLowerCase();
      i += 1;
    }
    if (word.length) {
      freq[word] = (freq[word] || 0) + 1;
      if (freq[word] > maxFreq && !bannedSet.has(word)) {
        maxFreq = freq[word];
        output = word;
      }
    }
  }
  return output;
};
