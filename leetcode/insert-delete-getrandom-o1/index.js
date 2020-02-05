/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.positions = {};
  this.nums = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (val in this.positions) {
    return false;
  }
  this.nums.push(val);
  this.positions[val] = this.nums.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!(val in this.positions)) {
    return false;
  }
  const last = this.nums[this.nums.length - 1];
  const p1 = this.positions[val];
  const p2 = this.positions[last];
  [this.nums[p1], this.nums[p2]] = [this.nums[p2], this.nums[p1]];
  this.nums.pop();
  this.positions[last] = p1;
  delete this.positions[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const r = Math.floor(Math.random() * this.nums.length);
  return this.nums[r];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
