/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  if (!forest.length || !forest[0].length) {
    return -1;
  }
  const m = forest.length;
  const n = forest[0].length;
  const trees = getTrees(forest, m, n);
  const position = [0, 0];
  let nSteps = 0;
  while (trees.length) {
    const p = trees.shift();
    const dist = bfs(forest, m, n, position, p);
    if (dist >= Infinity) {
      return -1;
    }
    nSteps += dist;
    position[0] = p[0];
    position[1] = p[1];
  }
  return nSteps;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(forest, m, n, source, target) {
  const queue = [[source, 0]];
  const visited = new Visited(m, n);
  visited.add(...source);
  let dist = 0;
  while (queue.length) {
    const length = queue.length;
    for (let l = 0; l < length; l++) {
      const [[x, y], d] = queue.shift();
      if (x === target[0] && y === target[1]) {
        return d;
      }
      for (const [di, dj] of dirs) {
        const i = x + di;
        const j = y + dj;
        if (isValid(i, j, m, n) && forest[i][j] > 0 && !visited.has(i, j)) {
          visited.add(i, j);
          queue.push([[i, j], d + getDist(x, y, i, j)]);
        }
      }
    }
    dist += 1;
  }
  return Infinity;
}

function getDist(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function getTrees(forest, m, n) {
  const trees = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 1) {
        trees.push([i, j]);
      }
    }
  }
  return trees.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]]);
}

class Visited {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.set = new Set();
  }

  add(i, j) {
    this.set.add(this.createKey(i, j));
  }

  has(i, j) {
    return this.set.has(this.createKey(i, j));
  }

  createKey(i, j) {
    return this.n * i + j;
  }
}
