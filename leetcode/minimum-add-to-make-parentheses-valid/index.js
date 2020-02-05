/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let left = 0;
  let right = 0;
  for (const c of S) {
    if (c === '(') {
      left += 1;
    } else if (c === ')') {
      if (left > 0) {
        left -= 1;
      } else {
        right += 1;
      }
    }
  }
  return left + right;
};
