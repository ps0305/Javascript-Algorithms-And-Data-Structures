/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = parseInt(s[0]) > 0 ? 1 : 0;
  let x = 1;
  let y = dp;
  for (let i = 2; i <= s.length; i++) {
    // prettier-ignore
    dp = (isDecodable(s.substring(i - 1, i)) ? y : 0) +
      (isDecodable(s.substring(i - 2, i)) ? x : 0);
    x = y;
    y = dp;
  }
  return dp;
};

function isDecodable(s) {
  const num = parseInt(s);
  if (s.length === 1) {
    return num > 0;
  }
  return num >= 10 && num <= 26;
}
