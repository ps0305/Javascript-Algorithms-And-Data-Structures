/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  // prettier-ignore
  let i = 0, j = 0, k = 0;
  const output = [];
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    const max = Math.max(arr1[i], arr2[j], arr3[k]);
    if (arr1[i] === max && arr2[j] === max && arr3[k] === max) {
      output.push(arr1[i]);
      i += 1;
      j += 1;
      k += 1;
    } else {
      if (arr1[i] < max) {
        i += 1;
      }
      if (arr2[j] < max) {
        j += 1;
      }
      if (arr3[k] < max) {
        k += 1;
      }
    }
  }
  return output;
};
