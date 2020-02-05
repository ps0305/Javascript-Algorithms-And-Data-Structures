/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
var floodFill = function(image, sr, sc, newColor, target = image[sr][sc]) {
  if (newColor === target) {
    return image;
  }
  image[sr][sc] = newColor;
  for (const [di, dj] of dirs) {
    const i = sr + di;
    const j = sc + dj;
    if (isValid(i, j, image.length, image[0].length) && image[i][j] === target) {
      floodFill(image, i, j, newColor, target);
    }
  }
  return image;
};

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
