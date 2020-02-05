/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.m = nums.length;
  this.arr = new Array(this.m).fill(0);
  this.bit = new Array(this.m + 1).fill(0);
  for (let i = 0; i < this.m; i++) {
    this.update(i, nums[i]);
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  const delta = val - this.arr[index];
  for (let i = index + 1; i < this.m + 1; i += getLastBit(i)) {
    this.bit[i] += delta;
  }
  this.arr[index] = val;
};

NumArray.prototype.getSum = function(index) {
  let sum = 0;
  for (let i = index + 1; i > 0; i -= getLastBit(i)) {
    sum += this.bit[i];
  }
  return sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(index, j) {
  return this.getSum(j) - this.getSum(index - 1);
};

function getLastBit(i) {
  return i & -i;
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
