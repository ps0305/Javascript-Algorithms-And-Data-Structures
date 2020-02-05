/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
  const m = mat.length;
  const pq = new PriorityQueue({
    comparator: (a, b) => a[0][a[1]] <= b[0][b[1]],
  });
  for (const row of mat) {
    pq.enqueue([row, 0]);
  }
  while (pq.length === m) {
    if (isAllEqual(pq.arr)) {
      const [row, i] = pq.peek();
      return row[i];
    }
    const [row, i] = pq.dequeue();
    if (i < row.length) {
      pq.enqueue([row, i + 1]);
    }
  }
  return -1;
};

function isAllEqual(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0][arr[i][1]] !== arr[i + 1][0][arr[i + 1][1]]) {
      return false;
    }
  }
  return true;
}

class PriorityQueue {
  constructor({ comparator, isEqual }) {
    this.comparator = comparator;
    this.isEqual = isEqual;
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

  delete(element) {
    const i = this.arr.findIndex((target) => this.isEqual(target, element));
    if (i >= 0) {
      this.arr[i] = this.arr[this.arr.length - 1];
      this.arr.pop();
      moveDown(this.arr, i, this.comparator);
    }
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
