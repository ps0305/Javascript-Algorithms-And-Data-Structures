/**
 * Initialize your data structure here.
 */
var HitCounter = function({ size = 300 } = {}) {
  this.arr = [...new Array(size)].map(() => [0, 0]);
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  const index = timestamp % this.arr.length;
  if (this.arr[index][0] !== timestamp) {
    this.arr[index][0] = timestamp;
    this.arr[index][1] = 0;
  }
  this.arr[index][1] += 1;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  return this.arr
    .map(([t, count]) => (timestamp - t < this.arr.length ? count : 0))
    .reduce((acc, cur) => acc + cur, 0);
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
