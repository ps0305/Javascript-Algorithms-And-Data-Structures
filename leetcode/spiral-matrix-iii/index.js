/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  const m = R;
  const n = C;
  const total = m * n;
  const output = [[r0, c0]];
  let [i, j] = [r0, c0];
  let length = 1;
  while (output.length < total) {
    for (let k = 0; k < length; k++) {
      j += 1;
      if (isValid(i, j, m, n)) {
        output.push([i, j]);
      }
    }
    for (let k = 0; k < length; k++) {
      i += 1;
      if (isValid(i, j, m, n)) {
        output.push([i, j]);
      }
    }
    length += 1;
    for (let k = 0; k < length; k++) {
      j -= 1;
      if (isValid(i, j, m, n)) {
        output.push([i, j]);
      }
    }
    for (let k = 0; k < length; k++) {
      i -= 1;
      if (isValid(i, j, m, n)) {
        output.push([i, j]);
      }
    }
    length += 1;
  }
  return output;
};

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
