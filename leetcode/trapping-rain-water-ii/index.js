/**
 * @param {number[][]} heightMap
 * @return {number}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

var trapRainWater = function(heightMap) {
  if (
    !heightMap.length ||
    !heightMap[0].length ||
    heightMap.length <= 2 ||
    heightMap[0].length <= 2
  ) {
    return 0;
  }
  const m = heightMap.length;
  const n = heightMap[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  const pq = new PriorityQueue({
    comparator: (a, b) => heightMap[a[0]][a[1]] - heightMap[b[0]][b[1]],
  });
  for (let j = 0; j < n; j++) {
    pq.enqueue([0, j]);
    visited[0][j] = true;
    pq.enqueue([m - 1, j]);
    visited[m - 1][j] = true;
  }
  for (let i = 1; i < m - 1; i++) {
    pq.enqueue([i, 0]);
    visited[i][0] = true;
    pq.enqueue([i, n - 1]);
    visited[i][n - 1] = true;
  }
  let output = 0;
  let level = 0;
  while (pq.length) {
    const p = pq.dequeue();
    const height = heightMap[p[0]][p[1]];
    output += level > height ? level - height : 0;
    level = Math.max(level, height);
    for (const [di, dj] of dirs) {
      const i = p[0] + di;
      const j = p[1] + dj;
      if (isValidPosition(i, j, m, n) && !visited[i][j]) {
        pq.enqueue([i, j]);
        visited[i][j] = true;
      }
    }
  }
  return output;
};

function isValidPosition(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

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
  const isValid = p < 0 || comparator(arr[p], arr[i]) <= 0;
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left]) <= 0) &&
    (right >= arr.length || comparator(arr[i], arr[right]) <= 0);
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) <= 0 ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
}
