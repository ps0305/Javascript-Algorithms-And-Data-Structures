/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sq = mid ** 2;
    if (sq === x) {
      return mid;
    } else if (sq > x) {
      right = mid - 1;
    } else if (sq < x) {
      left = mid + 1;
    }
  }
  return right;
};
