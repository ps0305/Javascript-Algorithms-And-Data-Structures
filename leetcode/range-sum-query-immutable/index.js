/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sums = new Array(nums.length).fill(0);
  this.sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    this.sums[i] = this.sums[i - 1] + nums[i];
  }
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j] - this.sums[i] + this.nums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
