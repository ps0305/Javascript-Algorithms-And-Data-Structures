/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    this.sum = [];
    return;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  this.sum = [...new Array(m)].map(() => new Array(n).fill(0));
  this.sum[0][0] = matrix[0][0];
  for (let j = 1; j < n; j++) {
    const i = 0;
    this.sum[i][j] = this.sum[i][j - 1] + matrix[i][j];
  }
  for (let i = 1; i < m; i++) {
    const j = 0;
    this.sum[i][j] = this.sum[i - 1][j] + matrix[i][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // prettier-ignore
      this.sum[i][j] = matrix[i][j] + this.sum[i - 1][j] + this.sum[i][j - 1] - this.sum[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (row1 >= this.sum.length || col1 >= this.sum[0].length) {
    return 0;
  }
  // prettier-ignore
  return this.sum[row2][col2]
    - (col1 > 0 ? this.sum[row2][col1 - 1] : 0)
    - (row1 > 0 ? this.sum[row1 - 1][col2] : 0)
    + (col1 > 0 && row1 > 0 ? this.sum[row1 - 1][col1 - 1] : 0);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
