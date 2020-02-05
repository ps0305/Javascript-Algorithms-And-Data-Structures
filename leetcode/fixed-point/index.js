/**
 * @param {number[]} A
 * @return {number}
 */
var fixedPoint = function(A) {
  let left = 0;
  let right = A.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid > A[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const mid = Math.floor((left + right) / 2);
  return mid === A[mid] ? left : -1;
};
