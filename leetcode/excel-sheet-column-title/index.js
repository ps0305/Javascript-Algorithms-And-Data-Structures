/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const m = 26;
  let output = '';
  let num = n;
  while (num >= 1) {
    // prettier-ignore
    const r = num % m > 0
      ? num % m
      : 26;
    output = getChar(r - 1) + output;
    num = Math.floor((num - r) / m);
  }
  return output;
};

function getChar(i) {
  const base = 'A'.charCodeAt(0);
  return String.fromCharCode(base + i);
}
