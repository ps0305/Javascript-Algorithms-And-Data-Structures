/**
 * @param {number[]} secret
 * @param {number} target
 * @return {number}
 */
var findInMountainArray = function(secret, target) {
  const p = findPeak(secret);
  if (secret[p] === target) {
    return p;
  }
  const left = binarySearch(secret, 0, p, 'asc', target);
  if (left >= 0) {
    return left;
  }
  return binarySearch(secret, p + 1, secret.length, 'dsc', target);
};

function findPeak(mArr) {
  let left = 0;
  let right = mArr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mArr[mid + 1] > mArr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function binarySearch(mArr, start, end, order, target) {
  let left = start;
  let right = end;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === mArr[mid]) {
      return mid;
    } else if ((target > mArr[mid] && order === 'asc') || (target < mArr[mid] && order === 'dsc')) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
}
