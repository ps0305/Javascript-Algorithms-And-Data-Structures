/**
 * @param {string} s
 * @return {number}
 */

const M = 10 ** 9 + 7;

var numDecodings = function(s) {
  let output = s[0] === '*' ? 9 : parseInt(s[0]) > 0 ? 1 : 0;
  let x = 1;
  let y = output;
  for (let i = 1; i < s.length; i++) {
    output = 0;
    if (s[i - 1] === '*' || s[i] === '*') {
      if (s[i - 1] === '*' && s[i] === '*') {
        output += y * 9;
        output += x * 15;
      } else if (s[i] === '*') {
        output += y * 9;
        for (let j = 1; j <= 9; j++) {
          const d2 = parseInt(s[i - 1] + j);
          if (d2 >= 10 && d2 <= 26) {
            output += x;
          }
        }
      } else if (s[i - 1] === '*') {
        const d1 = parseInt(s.slice(i, i + 1));
        if (d1 > 0) {
          output += y;
        }
        for (let j = 1; j <= 9; j++) {
          const d2 = parseInt(j + s[i]);
          if (d2 >= 10 && d2 <= 26) {
            output += x;
          }
        }
      }
    } else {
      const d1 = parseInt(s.slice(i, i + 1));
      const d2 = parseInt(s.slice(i - 1, i + 1));
      if (d2 >= 10 && d2 <= 26) {
        output += x;
      }
      if (d1 > 0) {
        output += y;
      }
    }
    output %= M;
    x = y;
    y = output;
  }
  return output;
};
