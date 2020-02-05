/**
 * @param {number} n
 * @return {number}
 */
/*
output = [1, 2, 3, 4, 5, 6]
        1*2 2*2 3*2 4*2 5*2 6*2
        1*3 2*3 3*3 4*3 5*3 6*3
        1*5 2*5 3*5 4*5 5*5 6*5
*/

const factors = [2, 3, 5];

var nthUglyNumber = function(n) {
  const output = [1, 2, 3, 4];
  const p = [0, 0, 0];
  for (let i = 1; i < n; i++) {
    const [min, indexes] = findMinIndex(output, p);
    output[i] = min;
    indexes.forEach((index) => {
      p[index] += 1;
    });
  }
  return output[n - 1];
};

function findMinIndex(output, p) {
  let min = Infinity;
  let indexes;
  for (let i = 0; i < p.length; i++) {
    const value = output[p[i]] * factors[i];
    if (value < min) {
      indexes = [];
      min = output[p[i]] * factors[i];
      indexes.push(i);
    } else if (value === min) {
      indexes.push(i);
    }
  }
  return [min, indexes];
}
