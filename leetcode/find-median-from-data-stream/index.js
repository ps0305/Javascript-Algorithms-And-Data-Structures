/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.minHeap = new PriorityQueue({
    comparator: (a, b) => a <= b,
  });
  this.maxHeap = new PriorityQueue({
    comparator: (a, b) => a >= b,
  });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const m = this.minHeap.length && this.maxHeap.length ? this.findMedian() : -Infinity;
  if (num >= m) {
    this.minHeap.enqueue(num);
  } else {
    this.maxHeap.enqueue(num);
  }
  if (this.minHeap.length - this.maxHeap.length > 1) {
    this.maxHeap.enqueue(this.minHeap.dequeue());
  } else if (this.maxHeap.length - this.minHeap.length > 1) {
    this.minHeap.enqueue(this.maxHeap.dequeue());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if ((this.minHeap.length + this.maxHeap.length) % 2 === 1) {
    return this.minHeap.length > this.maxHeap.length ? this.minHeap.peek() : this.maxHeap.peek();
  }
  return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class PriorityQueue {
  constructor({ comparator }) {
    this.comparator = comparator;
    this.arr = [];
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  peek() {
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
}
