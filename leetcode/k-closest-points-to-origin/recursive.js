/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  quickSelect(points, 0, points.length, K);
  return points.slice(0, K);
};

function quickSelect(points, start, end, k) {
  const p = end - 1;
  const i = partition(points, start, end - 1, p);
  if (i + 1 === k) {
    return;
  } else if (i + 1 < k) {
    quickSelect(points, i + 1, end, k);
  } else {
    quickSelect(points, start, i, k);
  }
}

function partition(points, start, end, p) {
  let j = start;
  for (let i = start; i < end; i++) {
    if (getDist(points[i], [0, 0]) < getDist(points[p], [0, 0])) {
      [points[i], points[j]] = [points[j], points[i]];
      j += 1;
    }
  }
  [points[p], points[j]] = [points[j], points[p]];
  return j;
}

function getDist([x1, y1], [x2, y2]) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
