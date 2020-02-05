/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const M = 10 ** 9 + 7;

var kConcatenationMaxSum = function(arr, k) {
  const sum = arr.reduce((acc, cur) => (acc + cur) % M, 0);
  if (k <= 1) {
    return findMaxSubarraySum(arr);
  }
  let maxSuffix = 0;
  let suffix = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    suffix = (suffix + arr[i]) % M;
    maxSuffix = Math.max(maxSuffix, suffix);
  }
  let maxPrefix = 0;
  let prefix = 0;
  for (let i = 0; i < arr.length; i++) {
    prefix = (prefix + arr[i]) % M;
    maxPrefix = Math.max(maxPrefix, prefix);
  }
  return Math.max(
    0,
    findMaxSubarraySum(arr),
    (Math.max(maxSuffix, sum) + Math.max(sum, 0) * (k - 2) + Math.max(maxPrefix, sum)) % M,
  );
};

function findMaxSubarraySum(arr) {
  let x = Math.max(arr[0], 0);
  let y = x;
  let max = x;
  for (let i = 1; i < arr.length; i++) {
    x = Math.max((y + arr[i]) % M, arr[i]);
    y = x;
    max = Math.max(max, x);
  }
  return max;
}
