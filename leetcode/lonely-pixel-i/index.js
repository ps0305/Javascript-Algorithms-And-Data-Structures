/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
  const m = picture.length;
  const n = picture[0].length;
  const row = new Array(m).fill(0);
  const col = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B') {
        row[i] += 1;
        col[j] += 1;
      }
    }
  }
  let output = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B' && row[i] === 1 && col[j] === 1) {
        output += 1;
      }
    }
  }
  return output;
};
