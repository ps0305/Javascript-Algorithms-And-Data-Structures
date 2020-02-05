/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const dirs = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

var minKnightMoves = function(x, y) {
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      if (a[1] !== b[1]) {
        return a[1] <= b[1];
      }
      const d1 = getDist(x, y, ...a[0]);
      const d2 = getDist(x, y, ...b[0]);
      return d1 <= d2;
    },
  });
  pq.enqueue([[0, 0], 0]);
  const visited = new Set();
  while (pq.length) {
    const [[px, py], d] = pq.dequeue();
    if (px === x && py === y) {
      return d;
    }
    for (const [di, dj] of dirs) {
      const i = px + di;
      const j = py + dj;
      const key = createKey(i, j);
      if (!visited.has(key)) {
        visited.add(key);
        pq.enqueue([[i, j], d + 1]);
      }
    }
  }
};

function createKey(i, j) {
  const m = 600;
  const n = 600;
  // prettier-ignore
  return n * (i - (-m)) + j - (-n);
}

function getDist(x, y, i, j) {
  return Math.abs(x - i) + Math.abs(y - j);
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
