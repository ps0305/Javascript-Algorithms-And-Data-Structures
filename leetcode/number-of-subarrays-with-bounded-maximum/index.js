/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
  return count(A, R) - count(A, L - 1);
};

function count(arr, max) {
  let output = 0;
  let nTarget = 0;
  for (const num of arr) {
    nTarget = num <= max ? nTarget + 1 : 0;
    output += nTarget;
  }
  return output;
}
