/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if (!J.length || !S.length) return 0;
  const hash = {};
  for (let i = 0; i < J.length; i++) {
    hash[J[i]] = true;
  }
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (hash[S[i]]) {
      count += 1;
    }
  }
  return count;
};
