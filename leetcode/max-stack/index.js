/**
 * initialize your data structure here.
 */
var MaxStack = function() {
  this.stack = [];
  this.maxStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  // prettier-ignore
  const max = this.maxStack.length > 0
    ? Math.max(x, this.maxStack[this.maxStack.length - 1])
    : x;
  this.stack.push(x);
  this.maxStack.push(max);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  this.maxStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  return this.maxStack[this.maxStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  const arr = [];
  while (this.stack[this.stack.length - 1] !== this.maxStack[this.maxStack.length - 1]) {
    arr.unshift(this.stack.pop());
    this.maxStack.pop();
  }
  const output = this.pop();
  for (const val of arr) {
    this.push(val);
  }
  return output;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
