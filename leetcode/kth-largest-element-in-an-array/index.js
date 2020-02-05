/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const partition = (arr, start, end) => {
  const p = end;
  let j = start;
  for (let i = start; i < end; i++) {
    if (arr[i] >= arr[p]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[p], arr[j]] = [arr[j], arr[p]];
  return j;
};

var findKthLargest = function(nums, k, i = 0, j = nums.length - 1) {
  const p = partition(nums, i, j);
  if (p === k - 1) {
    return nums[p];
  }
  if (p < k - 1) {
    return findKthLargest(nums, k, p + 1, j);
  }
  return findKthLargest(nums, k, i, p - 1);
};
