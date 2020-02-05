/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const set = new Set(points.map(createKey));
  let min = Infinity;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (set.has(createKey([x1, y2])) && set.has(createKey([x2, y1]))) {
        const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
        if (area) {
          min = Math.min(min, area);
        }
      }
    }
  }
  return min < Infinity ? min : 0;
};

const N = 40000;
function createKey([i, j]) {
  return N * i + j;
}
