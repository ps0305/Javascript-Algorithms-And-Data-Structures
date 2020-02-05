/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.sum = new Array(w.length).fill(0);
  this.sum[0] = w[0];
  for (let i = 1; i < w.length; i++) {
    this.sum[i] = this.sum[i - 1] + w[i];
  }
};

const createRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let left = 0;
  let right = this.sum.length - 1;
  const target = createRandomNumber(1, this.sum[this.sum.length - 1]);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (this.sum[mid] === target) {
      return mid;
    } else if (this.sum[mid] < target) {
      left = mid + 1;
    } else if (this.sum[mid] > target) {
      right = mid;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */
