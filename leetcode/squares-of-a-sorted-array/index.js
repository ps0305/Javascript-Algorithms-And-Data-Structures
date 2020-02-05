/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const output = [];
  let left = 0;
  let right = A.length - 1;
  while (left <= right) {
    const sLeft = A[left] ** 2;
    const sRight = A[right] ** 2;
    if (sLeft >= sRight) {
      output.push(sLeft);
      left += 1;
    } else {
      output.push(sRight);
      right -= 1;
    }
  }
  output.reverse();
  return output;
};
