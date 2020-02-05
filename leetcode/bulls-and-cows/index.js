/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const freq = createFreq(secret);
  let nA = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      nA += 1;
      freq[guess[i]] -= 1;
    }
  }
  let nB = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i] && freq[guess[i]] > 0) {
      nB += 1;
      freq[guess[i]] -= 1;
    }
  }
  return `${nA}A${nB}B`;
};

function createFreq(secret) {
  const freq = {};
  for (const c of secret) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
