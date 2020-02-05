/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  const maxQueue = new Queue({ comparator: (a, b) => a > b });
  const minQueue = new Queue({ comparator: (a, b) => a < b });
  for (const num of nums) {
    maxQueue.enqueue(num);
    minQueue.enqueue(num);
  }
  const [max1, max2, max3] = maxQueue.arr;
  const [min1, min2, min3] = minQueue.arr;
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

class Queue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    let i = 0;
    while (i < this.arr.length && !this.comparator(val, this.arr[i])) {
      i += 1;
    }
    this.arr.splice(i, 0, val);
    if (this.arr.length > 3) {
      this.arr.pop();
    }
  }
}
