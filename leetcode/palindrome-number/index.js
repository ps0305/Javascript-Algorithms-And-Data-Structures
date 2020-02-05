/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let y = x;
  let n = 0;
  while (y) {
    n = n * 10 + (y % 10);
    y = Math.floor(y / 10);
  }
  return n === x;
};
