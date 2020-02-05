/**
 * @param {number[]} A
 * @return {number[]}
 */
const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var sortArrayByParityII = function(A) {
  let i = 0;
  let j = 0;
  let k = 1;
  while (j < A.length && k < A.length) {
    if (A[i] % 2 === 0) {
      swap(A, i, j);
      j += 2;
      i += 2;
    } else if (A[i] % 2 === 1) {
      swap(A, i, k);
      k += 2;
    }
  }
  return A;
};
