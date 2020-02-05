/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points.length) {
    return 0;
  }
  points.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let ptr = [...points[0]];
  let nArrows = 1;
  for (let i = 1; i < points.length; i++) {
    if (isOverlapped(ptr, points[i])) {
      ptr[0] = Math.max(ptr[0], points[i][0]);
      ptr[1] = Math.min(ptr[1], points[i][1]);
    } else {
      ptr = [...points[i]];
      nArrows += 1;
    }
  }
  return nArrows;
};

function isOverlapped([s1, e1], [s2, e2]) {
  return e1 >= s2;
}
