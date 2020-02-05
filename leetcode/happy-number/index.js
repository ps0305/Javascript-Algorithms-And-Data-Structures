/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = next(n);
  let fast = next(slow);
  while (slow !== fast) {
    slow = next(slow);
    fast = next(next(fast));
  }
  if (slow === 1) {
    return true;
  }
  return false;
};

function next(n) {
  let num = n;
  let output = 0;
  while (num > 0) {
    output += (num % 10) ** 2;
    num = Math.floor(num / 10);
  }
  return output;
}
