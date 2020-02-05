/**
 * @param {number[]} A
 * @return {number[]}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var sortArrayByParity = function(A) {
  let i = 0;
  let j = 0;
  while (i < A.length) {
    if (A[i] % 2 === 0) {
      swap(A, i, j);
      i += 1;
      j += 1;
    } else if (A[i] % 2 === 1) {
      i += 1;
    }
  }
  return A;
};
