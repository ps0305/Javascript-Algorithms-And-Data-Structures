/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let c = 0;
  const output = [];
  while (i >= 0 || j >= 0 || c !== 0) {
    // prettier-ignore
    const sum = (i >= 0 ? arr1[i] : 0)
      + (j >= 0 ? arr2[j] : 0)
      + c;
    output.push(sum & 1);
    c = -(sum >> 1);
    if (i >= 0) i -= 1;
    if (j >= 0) j -= 1;
  }
  output.reverse();
  while (output.length >= 2 && output[0] === 0) {
    output.shift();
  }
  return output;
};
