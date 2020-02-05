/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const counts = {};
  for (let i = 0; i < s.length; i++) {
    counts[s[i]] = (counts[s[i]] || 0) + 1;
  }
  const values = Object.values(counts);
  let hasOddN = false;
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      sum += values[i];
    } else {
      sum += values[i] - 1;
      hasOddN = true;
    }
  }
  return hasOddN ? sum + 1 : sum;
};

export default longestPalindrome;
