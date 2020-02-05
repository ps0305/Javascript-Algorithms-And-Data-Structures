/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  let left, m, right;
  let max = 0;
  for (let i = 0; i < A.length - 1; ) {
    left = i;
    while (A[left + 1] <= A[left]) {
      left += 1;
    }
    m = left;
    while (A[m + 1] > A[m]) {
      m += 1;
    }
    right = m;
    while (A[right + 1] < A[right]) {
      right += 1;
    }
    if (isValid(left, m, right)) {
      max = Math.max(max, right - left + 1);
    }
    i = right;
  }
  return max;
};

function isValid(left, m, right) {
  return m - left >= 1 && right - m >= 1;
}
