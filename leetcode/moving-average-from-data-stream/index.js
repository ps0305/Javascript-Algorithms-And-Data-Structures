/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.arr = [];
  this.sum = 0;
  this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.arr.push(val);
  this.sum += val;
  if (this.arr.length > this.size) {
    const first = this.arr.shift();
    this.sum -= first;
  }
  return this.sum / this.arr.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
