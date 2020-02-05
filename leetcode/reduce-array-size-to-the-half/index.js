/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const freq = createFreq(arr);
  const keys = Object.keys(freq).sort((k1, k2) => freq[k2] - freq[k1]);
  let arrSize = arr.length;
  for (let i = 0; i < keys.length; i++) {
    arrSize -= freq[keys[i]];
    if (arrSize <= arr.length / 2) {
      return i + 1;
    }
  }
};

function createFreq(arr) {
  const freq = {};
  for (const el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }
  return freq;
}
