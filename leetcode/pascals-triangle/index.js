/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  if (!numRows) {
    return [];
  }
  const output = new Array(numRows);
  output[0] = [1];
  for (let i = 1; i < numRows; i++) {
    output[i] = new Array(i + 1).fill(0);
    for (let j = 0; j < i + 1; j++) {
      output[i][j] = (output[i - 1][j - 1] || 0) + (output[i - 1][j] || 0);
    }
  }
  return output;
};

export default generate;
