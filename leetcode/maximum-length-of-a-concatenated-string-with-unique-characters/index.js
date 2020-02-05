/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  return helper(unique(arr));
};

function helper(arr, start = 0, length = 0, visited = new Visited(), memo = {}) {
  const key = createKey(start, length, visited);
  if (key in memo) {
    return memo[key];
  }
  let max = length;
  for (let i = start; i < arr.length; i++) {
    if (!visited.has(arr[i])) {
      visited.add(arr[i]);
      const result = helper(arr, i + 1, length + arr[i].length, visited, memo);
      max = Math.max(max, result);
      visited.delete(arr[i]);
    }
  }
  memo[key] = max;
  return memo[key];
}

function unique(arr) {
  return arr.filter((word) => {
    const visited = new Set();
    for (const c of word) {
      if (visited.has(c)) {
        return false;
      }
      visited.add(c);
    }
    return true;
  });
}

function createKey(...args) {
  return args.join(':');
}

function getCharCode(c) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
}

class Visited {
  constructor() {
    this.val = 0;
  }

  add(word) {
    for (const c of word) {
      const i = getCharCode(c);
      const mask = 2 ** i;
      this.val = this.val | mask;
    }
  }

  delete(word) {
    for (const c of word) {
      const i = getCharCode(c);
      const mask = -1 ^ (2 ** i);
      this.val = this.val & mask;
    }
  }

  has(word) {
    for (const c of word) {
      const i = getCharCode(c);
      const mask = 1;
      const val = (this.val >> i) & mask;
      if (val === 1) {
        return true;
      }
    }
    return false;
  }

  toString() {
    return String.fromCharCode(this.val);
  }
}
