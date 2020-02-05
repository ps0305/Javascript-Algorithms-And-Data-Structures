/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  const m = A.length;
  const output = [];
  for (let i = m; i >= 0; i--) {
    const index = A.indexOf(i);
    if (index !== i - 1) {
      output.push(index + 1);
      reverse(A, index + 1);
      output.push(i);
      reverse(A, i);
    }
  }
  return output;
};

function reverse(arr, k) {
  let left = 0;
  let right = k - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1;
    right -= 1;
  }
}
