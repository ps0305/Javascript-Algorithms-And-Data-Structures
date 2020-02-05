/**
 * @param {string[]} A
 * @return {string}
 */
var shortestSuperstring = function(A) {
  const m = A.length;
  const queue = [];
  for (let i = 0; i < m; i++) {
    queue.push([new Selected(0).add(i), i, A[i]]);
  }
  const dp = new Array(2 ** m).fill(null).map(() => new Array(m).fill(Infinity));
  const memo = new Array(m).fill(null).map(() => new Array(m).fill(null));
  let min = A.reduce((a, b) => a + b, '');
  while (queue.length) {
    const [selected, i, str] = queue.shift();
    if (str.length >= dp[selected.val][i]) {
      continue;
    }
    if (selected.val === 2 ** m - 1) {
      if (str.length < min.length) {
        min = str;
      }
      continue;
    }
    dp[selected.val][i] = Math.min(dp[selected.val][i], str.length);
    for (let j = 0; j < m; j++) {
      if (!selected.has(j)) {
        queue.push([selected.clone().add(j), j, str + getAppendingStr(A, i, j, memo)]);
      }
    }
  }
  return min;
};

class Selected {
  constructor(val) {
    this.val = val;
  }

  add(i) {
    const mask = 2 ** i;
    this.val |= mask;
    return this;
  }

  clone() {
    return new Selected(this.val);
  }

  has(i) {
    return this.val >> i === 1;
  }
}

function getAppendingStr(A, i, j, memo) {
  if (memo[i][j]) {
    return memo[i][j];
  }
  const str1 = A[i];
  const str2 = A[j];
  for (let p = 0; p < str1.length; p++) {
    if (str2.startsWith(str1.substring(p))) {
      memo[i][j] = str2.substring(str1.length - p);
      return memo[i][j];
    }
  }
  memo[i][j] = str2;
  return memo[i][j];
}
