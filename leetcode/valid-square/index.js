/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(...args) {
  const dists = new Set();
  for (let i = 0; i < args.length; i++) {
    for (let j = i + 1; j < args.length; j++) {
      const dist = getDist(args[i], args[j]);
      dists.add(dist);
      if (dist <= 0 || dists.size > 2) {
        return false;
      }
    }
  }
  return true;
};

function getDist([x1, y1], [x2, y2]) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
