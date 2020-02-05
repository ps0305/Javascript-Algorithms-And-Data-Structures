/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function(s) {
  const counts = {};
  for (let i = 0; i < s.length; i++) {
    counts[s[i]] = (counts[s[i]] || 0) + 1;
  }
  const values = Object.values(counts);
  let nOdds = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 1) {
      nOdds += 1;
    }
    if (nOdds > 1) {
      return false;
    }
  }
  return true;
};

export default canPermutePalindrome;
