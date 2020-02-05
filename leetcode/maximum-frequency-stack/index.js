var FreqStack = function() {
  // val => freq
  this.freq = {};
  // freq => array of vals
  this.map = {};
  this.maxFreq = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  this.freq[x] = (this.freq[x] || 0) + 1;
  const f = this.freq[x];
  if (!(f in this.map)) this.map[f] = [];
  this.map[f].push(x);
  this.maxFreq = Math.max(this.maxFreq, f);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const val = this.map[this.maxFreq].pop();
  this.freq[val] -= 1;
  if (this.map[this.maxFreq].length === 0) {
    this.maxFreq -= 1;
  }
  return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
