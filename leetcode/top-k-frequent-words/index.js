/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const freq = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  const rFreq = {};
  for (const word in freq) {
    const f = freq[word];
    if (!(f in rFreq)) rFreq[f] = [];
    rFreq[f].push(word);
  }
  for (const f in rFreq) {
    rFreq[f].sort();
  }
  const output = [];
  for (let f = words.length; f >= 0; f--) {
    if (f in rFreq) {
      output.push(...rFreq[f]);
      if (output.length >= k) {
        return output.slice(0, k);
      }
    }
  }
  return output;
};
