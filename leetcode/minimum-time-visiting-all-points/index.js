/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let sum = 0;
  for (let i = 1; i < points.length; i++) {
    sum += getTime(points[i - 1], points[i]);
  }
  return sum;
};

function getTime([x1, y1], [x2, y2]) {
  return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
}
