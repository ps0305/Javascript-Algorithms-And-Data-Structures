/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const arr = getOccupations(seats);
  let max = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      const index = upperBound(arr, i);
      const right = index in arr ? arr[index] : Infinity;
      const left = index - 1 in arr ? arr[index - 1] : -Infinity;
      const dist = Math.min(right - i, i - left);
      max = Math.max(max, dist);
    }
  }
  return max;
};

function getOccupations(seats) {
  const arr = [];
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      arr.push(i);
    }
  }
  return arr;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
