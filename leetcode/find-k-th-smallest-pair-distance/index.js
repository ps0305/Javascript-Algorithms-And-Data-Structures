/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const n = count(nums, mid);
    if (n >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function count(arr, maxDiff) {
  const m = arr.length;
  let n = 0;
  let start = 0;
  for (let i = 0; i < m; i++) {
    while (start < i && arr[i] - arr[start] > maxDiff) {
      start += 1;
    }
    n += i - start;
  }
  return n;
}
