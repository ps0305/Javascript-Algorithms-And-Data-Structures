/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  const [i, j] = [Math.max(A, E), Math.max(B, F)];
  const [p, q] = [Math.min(C, G), Math.min(D, H)];
  return getArea(A, B, C, D) + getArea(E, F, G, H) - getArea(i, j, p, q);
};

function getArea(i, j, p, q) {
  if (i >= p || j >= q) {
    return 0;
  }
  return Math.abs(i - p) * Math.abs(j - q);
}
