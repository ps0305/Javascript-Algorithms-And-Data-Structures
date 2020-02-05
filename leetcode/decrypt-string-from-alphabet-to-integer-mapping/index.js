/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const base = 'a'.charCodeAt(0);
  let output = '';
  for (let i = s.length - 1; i >= 0; ) {
    const numStr = parseNumStr(s, i);
    const num = parseInt(numStr);
    output = String.fromCharCode(base + num - 1) + output;
    i -= s[i] === '#' ? numStr.length + 1 : numStr.length;
  }
  return output;
};

function parseNumStr(s, i) {
  if (s[i] === '#') {
    return s.substring(i - 2, i);
  }
  return s.substring(i, i + 1);
}
