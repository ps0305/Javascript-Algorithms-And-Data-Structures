/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let nChunks = 0;
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i];
    while (max !== i && i < arr.length) {
      i += 1;
      max = Math.max(max, arr[i]);
    }
    nChunks += 1;
  }
  return nChunks;
};
