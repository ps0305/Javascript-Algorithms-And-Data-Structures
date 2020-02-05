/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  // prettier-ignore
  const positions = intervals
    .reduce((acc, [start], index) => {
      acc[start] = index;
      return acc;
    }, {});
  const arr = intervals.map(([start]) => start);
  arr.sort((a, b) => a - b);
  return intervals.map(([, end]) => {
    const index = lowerBound(arr, end);
    return index < arr.length ? positions[arr[index]] : -1;
  });
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
  return left;
}
