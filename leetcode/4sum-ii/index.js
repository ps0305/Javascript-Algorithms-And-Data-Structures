/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const sumFreq1 = createSumFreq(A, B);
  const sumFreq2 = createSumFreq(C, D);
  let n = 0;
  for (const s1 in sumFreq1) {
    if (0 - s1 in sumFreq2) {
      n += sumFreq1[s1] * sumFreq2[0 - s1];
    }
  }
  return n;
};

function createSumFreq(arr1, arr2) {
  const freq = {};
  for (const val1 of arr1) {
    for (const val2 of arr2) {
      const sum = val1 + val2;
      freq[sum] = (freq[sum] || 0) + 1;
    }
  }
  return freq;
}
