/**
 * @param {number[][]} A
 * @return {number}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
var maximumMinimumPath = function(A) {
  const m = A.length;
  const n = A[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      return a[1] > b[1];
    },
  });
  pq.enqueue([[0, 0], A[0][0]]);
  while (pq.length) {
    const [[x, y], min] = pq.dequeue();
    if (x === m - 1 && y === n - 1) {
      return min;
    }
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValidPosition(i, j, m, n) && !visited[i][j]) {
        visited[i][j] = true;
        pq.enqueue([[i, j], Math.min(min, A[i][j])]);
      }
    }
  }
  return -Infinity;
};

function isValidPosition(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    this.arr.push(val);
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
