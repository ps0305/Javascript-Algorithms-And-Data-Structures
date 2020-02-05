/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const s = S.replace(/-/g, '').toUpperCase();
  const output = [];
  const mod = s.length % K;
  for (let i = s.length - 1; i >= mod; i -= K) {
    output.push(s.slice(i - K + 1, i + 1));
  }
  if (mod !== 0) {
    output.push(s.slice(0, mod));
  }
  return output.reverse().join('-');
};
