/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let total = 0;
  let sum = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    total += gas[i] - cost[i];
    sum += gas[i] - cost[i];
    if (sum < 0) {
      start = i + 1;
      sum = 0;
    }
  }
  return total >= 0 ? start : -1;
};
