/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  const arr = new Array(m).fill(0);
  let max = -Infinity;
  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {
      for (let i = 0; i < m; i++) {
        arr[i] = (right === left ? 0 : arr[i]) + matrix[i][right];
      }
      max = Math.max(max, findMax(arr, k));
    }
  }
  return max;
};

function findMax(nums, target) {
  const arr = [0];
  let sum = 0;
  let max = -Infinity;
  for (const num of nums) {
    sum += num;
    const index = lowerBound(arr, sum - target);
    if (index in arr) {
      max = Math.max(max, sum - arr[index]);
    }
    const i = lowerBound(arr, sum);
    arr.splice(i, 0, sum);
  }
  return max;
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
