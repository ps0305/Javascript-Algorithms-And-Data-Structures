/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.cache = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.cache.set(number, (this.cache.get(number) || 0) + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (const [number] of this.cache) {
    if (this.cache.has(value - number)) {
      if (
        (number === value - number && this.cache.get(value - number) >= 2) ||
        (number !== value - number && this.cache.has(value - number))
      ) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
