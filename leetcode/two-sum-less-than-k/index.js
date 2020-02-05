/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  A.sort((a, b) => a - b);
  let i = 0;
  let j = A.length - 1;
  let max = -1;
  while (i < j) {
    const sum = A[i] + A[j];
    if (sum < K) {
      max = Math.max(max, sum);
    }
    while (i + 1 < j && A[i + 1] === A[i]) {
      i += 1;
    }
    while (j - 1 > i && A[j - 1] === A[j]) {
      j -= 1;
    }
    if (sum === K) {
      i += 1;
      j -= 1;
    } else if (sum > K) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return max;
};
