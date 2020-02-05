/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let left = 0;
  let right = Math.max(...piles);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const sum = piles.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0);
    if (sum > H) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
