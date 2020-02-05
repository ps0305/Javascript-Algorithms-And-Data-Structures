/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x + y < z) {
    return false;
  }
  if (z === 0) {
    return true;
  }
  return z % gcd(x, y) === 0;
};

function gcd(x, y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}
