/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  // prettier-ignore
  let x = tx, y = ty;
  while (x >= sx && y >= sy) {
    if (x > y) {
      if (y === sy) {
        return (x - sx) % y === 0;
      }
      x = x % y;
    } else {
      if (x === sx) {
        return (y - sy) % x === 0;
      }
      y = y % x;
    }
  }
  return false;
};
