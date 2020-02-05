/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = createFreq(nums);
  const rFreq = reverse(freq);
  const output = [];
  for (let i = nums.length; i >= 0; i--) {
    if (i in rFreq) {
      output.push(...rFreq[i]);
    }
    if (output.length >= k) {
      return output.slice(0, k);
    }
  }
  return output;
};

function reverse(map) {
  const rMap = {};
  for (const key in map) {
    const val = map[key];
    if (!(val in rMap)) rMap[val] = [];
    rMap[val].push(key);
  }
  return rMap;
}

function createFreq(arr) {
  const map = {};
  for (const el of arr) {
    map[el] = (map[el] || 0) + 1;
  }
  return map;
}
