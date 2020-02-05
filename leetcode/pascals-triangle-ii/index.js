/**
 * @param {number} rowIndex
 * @return {number[]}
 */
/*
  f(i, j) = f(i - 1, j - 1) + f(i - 1, j)
*/
const getRow = function(rowIndex) {
  const output = new Array(rowIndex + 1).fill(0);
  output[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      output[j] = (output[j - 1] || 0) + (output[j] || 0);
    }
  }
  return output;
};

export default getRow;
