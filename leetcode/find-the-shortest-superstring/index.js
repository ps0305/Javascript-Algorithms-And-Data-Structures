/**
 * @param {string[]} A
 * @return {string}
 */
var shortestSuperstring = function(A) {
  const m = A.length;
  const dp = new Array(2 ** m).fill(null).map(() => new Array(m).fill(Infinity));
  const appendingLength = createAppendingLength(A, m);
  const parents = new Array(2 ** m).fill(null).map(() => new Array(m).fill(null));
  const queue = A.map((str, i) => [new Selected().add(i), i, null, str.length]);
  while (queue.length) {
    const [selected, i, p, length] = queue.pop();
    if (length < dp[selected.val][i]) {
      dp[selected.val][i] = length;
      parents[selected.val][i] = p;
    }
    if (selected.val === 2 ** m - 1) {
      continue;
    }
    for (let j = 0; j < m; j++) {
      const next = selected.clone().add(j);
      if (!selected.has(j) && length + appendingLength[i][j] < dp[next.val][j]) {
        queue.push([next, j, i, length + appendingLength[i][j]]);
      }
    }
  }
  const path = createPath(dp, parents, m);
  return createString(A, path, appendingLength);
};

function createString(A, path, appendingLength) {
  let output = A[path[0]];
  for (let p = 1; p < path.length; p++) {
    const j = path[p];
    const i = path[p - 1];
    output += A[j].substring(A[j].length - appendingLength[i][j]);
  }
  return output;
}

function createPath(dp, parents, m) {
  const path = [];
  const selected = new Selected(2 ** m - 1);
  let ptr = dp[2 ** m - 1].reduce((i, _, j, arr) => (arr[i] <= arr[j] ? i : j), 0);
  while (ptr !== null) {
    path.push(ptr);
    const p = parents[selected.val][ptr];
    selected.delete(ptr);
    ptr = p;
  }
  path.reverse();
  return path;
}

function createAppendingLength(A, m) {
  const matrix = new Array(m).fill(null).map(() => new Array(m).fill(Infinity));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (i !== j) {
        matrix[i][j] = getAppendingLength(A[i], A[j]);
      }
    }
  }
  return matrix;
}

function getAppendingLength(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str2.startsWith(str1.substring(i))) {
      return str2.length - (str1.length - i);
    }
  }
  return str2.length;
}

class Selected {
  constructor(val) {
    this.val = val;
  }

  add(i) {
    const mask = 2 ** i;
    this.val |= mask;
    return this;
  }

  delete(i) {
    const mask = -1 ^ (2 ** i);
    this.val &= mask;
    return this;
  }

  clone() {
    return new Selected(this.val);
  }

  has(i) {
    return this.val >> i === 1;
  }
}
