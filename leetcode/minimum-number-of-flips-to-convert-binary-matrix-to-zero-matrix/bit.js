/**
 * @param {number[][]} mat
 * @return {number}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var minFlips = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const visited = new Set();
  let queue = [createBitVector(mat, m, n)];
  let nSteps = 0;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const bit = queue.shift();
      if (bit === 0) {
        return nSteps;
      }
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          let flipped = flip(m, n, i, j, bit);
          for (const [di, dj] of dirs) {
            const x = i + di;
            const y = j + dj;
            if (isValid(m, n, x, y)) {
              flipped = flip(m, n, x, y, flipped);
            }
          }
          if (!visited.has(flipped)) {
            visited.add(flipped);
            next.push(flipped);
          }
        }
      }
    }
    queue = next;
    nSteps += 1;
  }
  return -1;
};

function flip(m, n, i, j, bit) {
  const num = createNum(m, n, i, j);
  return bit ^ (1 << num);
}

function createBitVector(matrix, m, n) {
  let bit = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = createNum(m, n, i, j);
      bit += matrix[i][j] === 1 ? 2 ** num : 0;
    }
  }
  return bit;
}

function createNum(m, n, i, j) {
  return n * i + j;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
