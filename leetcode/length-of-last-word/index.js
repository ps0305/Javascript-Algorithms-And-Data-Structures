/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lastWord = '';
  for (const word of s.split(' ')) {
    if (word.length) {
      lastWord = word;
    }
  }
  return lastWord.length;
};
