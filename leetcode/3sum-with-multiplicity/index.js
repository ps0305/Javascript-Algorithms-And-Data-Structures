/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  // number of combinations of 2 numbers of certain sum
  const counts = {};
  let n = 0;
  for (let i = 0; i < A.length; i++) {
    n += counts[target - A[i]] || 0;
    for (let j = 0; j < i; j++) {
      const sum = A[i] + A[j];
      counts[sum] = (counts[sum] || 0) + 1;
    }
  }
  return n % (10 ** 9 + 7);
};
