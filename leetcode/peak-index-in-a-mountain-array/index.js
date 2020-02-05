/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let left = 0;
  let right = A.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (A[mid] < A[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
