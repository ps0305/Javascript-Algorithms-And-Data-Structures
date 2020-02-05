/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function(n, m) {
  return createHelper(n, m, new Array(m).fill(0), 0);
};

function createHelper(...args) {
  const cache = new Map();
  let min = Infinity;
  function helper(n, m, heights, nSquares) {
    const key = createKey(n, m, heights);
    if (isComplete(n, m, heights)) {
      min = Math.min(min, nSquares);
      return;
    }
    if (nSquares >= min || (cache.get(key) || Infinity) < nSquares) {
      return;
    }
    cache.set(key, nSquares);
    const [start, maxSquareSize] = findPosition(n, m, heights);
    for (let size = maxSquareSize; size >= 1; size--) {
      fill(heights, start, size, size);
      helper(n, m, heights, nSquares + 1);
      fill(heights, start, size, -size);
    }
  }
  helper(...args);
  return min;
}

function createKey(n, m, heights) {
  let key = 0;
  for (let i = 0; i < m; i++) {
    key += n ** i * heights[i];
  }
  return key;
}

function isComplete(n, m, heights) {
  for (const height of heights) {
    if (height < n) {
      return false;
    }
  }
  return true;
}

function fill(heights, start, length, delta) {
  for (let i = start; i < start + length; i++) {
    heights[i] += delta;
  }
}

function findPosition(n, m, heights) {
  let min = Infinity;
  let start = -1;
  let maxSquareSize = 0;
  for (let i = 0; i < m; i++) {
    if (heights[i] < min) {
      min = heights[i];
      start = i;
      const end = findEnd(heights, i);
      maxSquareSize = Math.min(n - heights[i], end - i);
    }
  }
  return [start, maxSquareSize];
}

function findEnd(heights, i) {
  let end = i;
  while (heights[end] === heights[i]) {
    end += 1;
  }
  return end;
}
