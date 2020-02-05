/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
  return helper(workers, bikes, 0, 0, new Selected(), {}, { globalMin: Infinity });
};

function helper(workers, bikes, start, sum, selected, memo, data) {
  if (sum > data.globalMin) {
    return data.globalMin;
  }
  const key = createKey(start, sum, selected.val);
  if (key in memo) {
    return memo[key];
  }
  if (start >= workers.length) {
    memo[key] = sum;
    data.globalMin = Math.min(data.globalMin, memo[key]);
    return memo[key];
  }
  let min = Infinity;
  for (let i = 0; i < bikes.length; i++) {
    if (!selected.has(i)) {
      selected.add(i);
      const dist = getDist(workers[start], bikes[i]);
      const result = helper(workers, bikes, start + 1, sum + dist, selected, memo, data);
      min = Math.min(min, result);
      selected.delete(i);
    }
  }
  memo[key] = min;
  return memo[key];
}

function createKey(...args) {
  return args.join(':');
}

function getDist([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

class Selected {
  constructor() {
    this.val = 0;
  }

  add(i) {
    this.val = this.val | (2 ** i);
  }

  delete(i) {
    const mask = -1 ^ (2 ** i);
    this.val = this.val & mask;
  }

  has(i) {
    return ((this.val >> i) & 1) === 1;
  }
}
