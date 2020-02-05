/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const k = countKLetters(grid, m, n);
  const dist = new Array(2 ** k + 1).fill(null).map(() => {
    return new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
  });
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const origin = find(grid, m, n, '@');
  const queue = [[origin, new Selected(0), 0]];
  while (queue.length) {
    const [[x, y], selected, d] = queue.shift();
    if (d + 1 > dist[selected.val][x][y]) {
      continue;
    }
    dist[selected.val][x][y] = d;
    if (selected.val === 2 ** k - 1) {
      return dist[selected.val][x][y];
    }
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      const canVisit =
        isValid(m, n, i, j) &&
        (grid[i][j] === '@' ||
          grid[i][j] === '.' ||
          /[a-f]/.test(grid[i][j]) ||
          (/[A-F]/.test(grid[i][j]) && selected.has(grid[i][j])));
      if (canVisit) {
        const next = /[a-f]/.test(grid[i][j]) ? selected.clone().add(grid[i][j]) : selected;
        queue.push([[i, j], next, d + 1]);
      }
    }
  }
  return -1;
};

function countKLetters(grid, m, n) {
  let k = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      k += /[a-z]/.test(grid[i][j]) ? 1 : 0;
    }
  }
  return k;
}

class Selected {
  constructor(val) {
    this.val = val;
  }

  add(c) {
    const i = getCode(c);
    const mask = 2 ** i;
    this.val |= mask;
    return this;
  }

  has(c) {
    const i = getCode(c);
    return ((this.val >> i) & 1) === 1;
  }

  clone() {
    return new Selected(this.val);
  }
}

function getCode(c) {
  const base = 'a'.charCodeAt(0);
  const i = c.charCodeAt(0) - base;
  return i;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function find(grid, m, n, target) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target) {
        return [i, j];
      }
    }
  }
}
