/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
  const diff = getDiffs(arr).filter(isValid(arr))[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + diff !== arr[i + 1]) {
      return arr[i] + diff;
    }
  }
  return arr[0] + diff;
};

function isValid(arr) {
  return (diff) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if ((diff > 0 && arr[i] + diff > arr[i + 1]) || (diff < 0 && arr[i] + diff < arr[i + 1])) {
        return false;
      }
    }
    return true;
  };
}

function getDiffs(arr) {
  const diff = new Set();
  for (let i = 0; i < arr.length - 1; i++) {
    diff.add(arr[i + 1] - arr[i]);
  }
  return [...diff];
}
