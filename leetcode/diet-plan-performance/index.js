/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
  let start = 0;
  let sum = 0;
  let nPoints = 0;
  for (let i = 0; i < calories.length; i++) {
    sum += calories[i];
    while (i - start + 1 > k) {
      sum -= calories[start];
      start += 1;
    }
    if (i - start + 1 >= k) {
      nPoints += getPoints(sum, lower, upper);
    }
  }
  return nPoints;
};

function getPoints(sum, lower, upper) {
  if (sum < lower) {
    return -1;
  }
  if (sum > upper) {
    return 1;
  }
  return 0;
}
