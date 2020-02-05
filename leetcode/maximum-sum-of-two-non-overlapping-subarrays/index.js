/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  const m = A.length;
  const prefixSum = createPrefixSum(A);
  let max = 0;
  for (let i = 0; i <= m - L; i++) {
    const sl = prefixSum[i + L - 1] - (i - 1 >= 0 ? prefixSum[i - 1] : 0);
    for (let j = 0; j + M <= i; j++) {
      const sm = prefixSum[j + M - 1] - (j - 1 >= 0 ? prefixSum[j - 1] : 0);
      max = Math.max(max, sl + sm);
    }
    for (let j = i + L; j + M <= m; j++) {
      const sm = prefixSum[j + M - 1] - (j - 1 >= 0 ? prefixSum[j - 1] : 0);
      max = Math.max(max, sl + sm);
    }
  }
  return max;
};

function createPrefixSum(arr) {
  const prefixSum = new Array(arr.length).fill(0);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}
