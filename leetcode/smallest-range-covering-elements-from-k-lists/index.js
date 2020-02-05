/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const pq = new PriorityQueue({
    comparator: (a, b) => a[0] <= b[0],
  });
  for (let i = 0; i < nums.length; i++) {
    const j = 0;
    pq.enqueue([nums[i][j], i, j]);
  }
  let max = Math.max(...nums.map((arr) => arr[0]));
  const range = [-Infinity, max];
  while (pq.length >= nums.length) {
    const [min, i, j] = pq.dequeue();
    if (max - min < range[1] - range[0]) {
      range[0] = min;
      range[1] = max;
    }
    if (j + 1 < nums[i].length) {
      const next = nums[i][j + 1];
      max = Math.max(max, next);
      pq.enqueue([next, i, j + 1]);
    }
  }
  return range;
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
