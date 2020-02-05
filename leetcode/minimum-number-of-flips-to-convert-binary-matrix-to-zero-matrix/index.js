/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const visited = new Set();
  let queue = [[mat, new Selected()]];
  let nSteps = 0;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const [matrix, selected] = queue.shift();
      if (isZero(matrix, m, n)) {
        return nSteps;
      }
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          const key = createKey(m, n, i, j);
          if (!selected.has(key)) {
            selected.add(key);
            if (!visited.has(selected.val)) {
              visited.add(selected.val);
              next.push([flip(clone(matrix), m, n, i, j), selected.clone()]);
            }
            selected.delete(key);
          }
        }
      }
    }
    nSteps += 1;
    queue = next;
  }
  return -1;
};

class Selected {
  constructor(val = 0) {
    this.val = val;
  }

  add(n) {
    const mask = 2 ** n;
    this.val = this.val | mask;
    return this;
  }

  delete(n) {
    const mask = -1 ^ (2 ** n);
    this.val = this.val & mask;
  }

  has(n) {
    const mask = 2 ** n;
    return (this.val & mask) === 1;
  }

  clone() {
    return new Selected(this.val);
  }
}

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function flip(matrix, m, n, x, y) {
  matrix[x][y] ^= 1;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(m, n, i, j)) {
      matrix[i][j] ^= 1;
    }
  }
  return matrix;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function clone(matrix) {
  return JSON.parse(JSON.stringify(matrix));
}

function createKey(m, n, i, j) {
  return n * i + j;
}

function isZero(matrix, m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
