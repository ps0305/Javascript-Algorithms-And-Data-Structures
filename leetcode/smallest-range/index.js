/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const n = nums.length;
  const pq = new PriorityQueue({
    comparator: (a, b) => a[0] < b[0],
  });
  const indexes = new Array(n).fill(1);
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    const val = nums[i][0];
    const groupIndex = i;
    pq.enqueue([val, groupIndex]);
    max = Math.max(max, val);
  }
  const output = [];
  while (pq.length >= nums.length) {
    const shouldUpdateOutput =
      !output.length ||
      max - pq.peek()[0] < output[1] - output[0] ||
      (max - pq.peek()[0] === output[1] - output[0] && pq.peek()[0] < output[0] && max < output[1]);
    if (shouldUpdateOutput) {
      output[0] = pq.peek()[0];
      output[1] = max;
    }
    const [, groupIndex] = pq.dequeue();
    if (indexes[groupIndex] < nums[groupIndex].length) {
      const val = nums[groupIndex][indexes[groupIndex]];
      pq.enqueue([val, groupIndex]);
      indexes[groupIndex] += 1;
      max = Math.max(max, val);
    }
  }
  return output;
};

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
