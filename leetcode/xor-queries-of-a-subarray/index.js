/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  const prefixXor = new Array(arr.length).fill(0);
  prefixXor[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixXor[i] = prefixXor[i - 1] ^ arr[i];
  }
  const output = [];
  for (const [i, j] of queries) {
    const val = i - 1 >= 0 ? prefixXor[j] ^ prefixXor[i - 1] : prefixXor[j];
    output.push(val);
  }
  return output;
};
