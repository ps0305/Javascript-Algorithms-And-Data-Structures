/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = Math.max(...weights);
  let right = weights.reduce((acc, cur) => acc + cur, 0) + 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const days = getDays(weights, mid);
    if (days > D) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

function getDays(weights, capacity) {
  let count = 1;
  let sum = 0;
  for (const weight of weights) {
    if (sum + weight > capacity) {
      count += 1;
      sum = 0;
    }
    sum += weight;
  }
  return count;
}
