/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const i = lowerBound(matrix.map((row) => row[n - 1]), target);
  return binarySearch(matrix[i], target);
};

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
  return left < arr.length ? left : arr.length - 1;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return true;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
}
