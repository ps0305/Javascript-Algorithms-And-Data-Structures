/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  const n = workers.length;
  const m = bikes.length;
  const pairs = createPairs(workers, bikes, n, m);
  const bucket = createBucket(pairs, workers, bikes);
  const visited = new Set();
  const output = new Array(n).fill(null);
  for (const d in bucket) {
    for (const [i, j] of bucket[d]) {
      if (output[i] === null && !visited.has(j)) {
        output[i] = j;
        visited.add(j);
      }
      if (visited.size >= n) {
        return output;
      }
    }
  }
  return output;
};

function createBucket(pairs, workers, bikes) {
  const bucket = {};
  for (const pair of pairs) {
    const [p, q] = pair;
    const d = getDist(workers[p], bikes[q]);
    if (!(d in bucket)) bucket[d] = [];
    bucket[d].push(pair);
  }
  return bucket;
}

function createPairs(n, m) {
  const pairs = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

function getDist([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
