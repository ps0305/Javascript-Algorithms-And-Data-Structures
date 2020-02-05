/**
 * @param {number[][]} heightMap
 * @return {number}
 */

/*
[
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]
*/

const createArray = (m, n) => {
  return [...new Array(m)].map(() => new Array(n).fill(0));
};

var trapRainWater = function(heightMap) {
  if (!heightMap.length || !heightMap[0].length) {
    return 0;
  }
  const m = heightMap.length;
  const n = heightMap[0].length;
  const top = createArray(m, n);
  const right = createArray(m, n);
  const bottom = createArray(m, n);
  const left = createArray(m, n);
  for (let j = 0; j < n; j++) {
    let max = 0;
    for (let i = 1; i < m - 1; i++) {
      top[i][j] = Math.max(heightMap[i - 1][j], top[i - 1][j]);
    }
    max = 0;
    for (let i = m - 1 - 1; i >= 0; i--) {
      bottom[i][j] = Math.max(heightMap[i + 1][j], top[i + 1][j]);
    }
  }
  for (let i = 0; i < m; i++) {
    let max = 0;
    for (let j = 1; j < n; j++) {
      left[i][j] = Math.max(heightMap[i][j - 1], left[i][j - 1]);
    }
    max = 0;
    for (let j = n - 1 - 1; j >= 0; j--) {
      right[i][j] = Math.max(heightMap[i][j + 1], right[i][j + 1]);
    }
  }
  let output = 0;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (
        heightMap[i][j] < top[i][j] &&
        heightMap[i][j] < right[i][j] &&
        heightMap[i][j] < bottom[i][j] &&
        heightMap[i][j] < left[i][j]
      ) {
        output += Math.min(top[i][j], right[i][j], bottom[i][j], left[i][j]) - heightMap[i][j];
      }
    }
  }
  return output;
};
