/**
 * @param {number} num
 * @return {string}
 */

// prettier-ignore
const map = [
  ...[...new Array(10)].map((_, i) => i),
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

var toHex = function(num) {
  if (!num) {
    return '0';
  }
  let output = '';
  let n = num;
  while (n) {
    const r = n & 15;
    output = map[r] + output;
    n = n >>> 4;
  }
  return output;
};
