/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const target = 'balloon';
  const freqOfText = createFreq(text);
  const freqOfBaloon = createFreq(target);
  let min = Infinity;
  for (const c in freqOfBaloon) {
    min = Math.min(min, Math.floor(freqOfText[c] / freqOfBaloon[c]));
  }
  return min < Infinity ? min : 0;
};

function createFreq(str) {
  const freq = {};
  for (const c of str) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
