/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let nZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    nZeros += arr[i] === 0 ? 1 : 0;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    nZeros -= arr[i] === 0 ? 1 : 0;
    if (arr[i] !== 0) {
      const j = i + nZeros;
      if (j < arr.length) {
        arr[j] = arr[i];
      }
      if (nZeros) {
        arr[i] = 0;
      }
    }
  }
};
