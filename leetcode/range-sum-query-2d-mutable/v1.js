/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  this.m = matrix.length;
  this.n = matrix[0].length;
  this.matrix = new Array(this.m).fill(null).map(() => new Array(this.n).fill(0));
  this.bit = new Array(this.m + 1).fill(null).map(() => new Array(this.n + 1).fill(0));
  for (let i = 0; i < this.m; i++) {
    for (let j = 0; j < this.n; j++) {
      this.update(i, j, matrix[i][j]);
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  const delta = val - this.matrix[row][col];
  for (let j = col + 1; j <= this.n; j += getLastBit(j)) {
    this.bit[row][j] += delta;
  }
  this.matrix[row][col] = val;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    sum += this.getSum(i, col2) - this.getSum(i, col1 - 1);
  }
  return sum;
};

NumMatrix.prototype.getSum = function(row, col) {
  let sum = 0;
  for (let j = col + 1; j > 0; j -= getLastBit(j)) {
    sum += this.bit[row][j];
  }
  return sum;
};

function getLastBit(i) {
  return i & -i;
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
