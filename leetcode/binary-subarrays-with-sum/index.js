/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  // number of occurrences of a certain sum
  const counts = {
    0: 1,
  };
  let count = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    count += counts[sum - S] || 0;
    counts[sum] = (counts[sum] || 0) + 1;
  }
  return count;
};
