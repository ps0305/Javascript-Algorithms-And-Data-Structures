/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.vals = [];
  this.positions = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  const isExisted = val in this.positions && this.positions[val].length > 0;
  if (!isExisted) {
    this.positions[val] = [];
  }
  this.vals.push(val);
  this.positions[val].push(this.vals.length - 1);
  return !isExisted;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  const isExisted = val in this.positions && this.positions[val].length > 0;
  if (isExisted) {
    const last = this.vals[this.vals.length - 1];
    const p1 = this.positions[val].pop();
    const p2 = this.vals.length - 1;
    [this.vals[p1], this.vals[p2]] = [this.vals[p2], this.vals[p1]];
    this.vals.pop();
    this.positions[last].push(p1);
    this.positions[last].splice(this.positions[last].indexOf(p2), 1);
  }
  return isExisted;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  const r = Math.floor(Math.random() * this.vals.length);
  return this.vals[r];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
