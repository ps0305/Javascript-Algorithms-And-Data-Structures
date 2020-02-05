/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
  const prefixSum = createPrefixSum(count);
  const nTotal = prefixSum[prefixSum.length - 1].count;
  return [
    prefixSum[0].val,
    prefixSum[prefixSum.length - 1].val,
    count.reduce((acc, n, i) => acc + n * i, 0) / nTotal,
    findMedian(prefixSum, nTotal),
    findModeOfSample(count),
  ];
};

function createPrefixSum(count) {
  const prefixSum = [];
  let sum = 0;
  for (let i = 0; i < count.length; i++) {
    if (sum + count[i] > sum) {
      sum += count[i];
      prefixSum.push({
        val: i,
        count: sum,
      });
    }
  }
  return prefixSum;
}

const defaultComparator = (target, val) => target <= val.count;
const defaultGetter = (arr, i) => arr[i].val;

function lowerBound(arr, target, comparator = defaultComparator, getter = defaultGetter) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(target, arr[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return getter(arr, left);
}

function findMedian(prefixSum, nTotal) {
  if (nTotal % 2 === 1) {
    return lowerBound(prefixSum, Math.ceil(nTotal / 2));
  }
  return (
    (lowerBound(prefixSum, Math.ceil(nTotal / 2)) +
      lowerBound(prefixSum, Math.ceil(nTotal / 2) + 1)) /
    2
  );
}

function findModeOfSample(count) {
  let j = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > count[j]) {
      j = i;
    }
  }
  return j;
}
