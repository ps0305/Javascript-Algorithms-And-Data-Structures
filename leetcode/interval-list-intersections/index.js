/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const output = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    if (isOverlapped(A[i], B[j])) {
      const merged = [Math.max(A[i][0], B[j][0]), Math.min(A[i][1], B[j][1])];
      output.push(merged);
    }
    if (A[i][1] < B[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return output;
};

function isOverlapped([s1, e1], [s2, e2]) {
  return (s2 <= e1 && e2 >= s1) || (s1 <= e2 && e1 >= s2);
}
