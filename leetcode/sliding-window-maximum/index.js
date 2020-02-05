/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const arr = new Queue();
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.length && arr[0] <= i - k) {
      arr.shift();
    }
    while (arr.length && nums[i] > nums[arr.last()]) {
      arr.pop();
    }
    arr.push(i);
    if (i >= k - 1) {
      output.push(nums[arr[0]]);
    }
  }
  return output;
};

class Queue extends Array {
  last() {
    return this[this.length - 1];
  }
}
