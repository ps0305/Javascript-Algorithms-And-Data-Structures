/**
 * @param {number[]} cost
 * @return {number}
 */

/*
  f(i) = Math.min(
    f(i - 2) + cost[i],
    f(i - 1) + cost[i],
  )
*/

var minCostClimbingStairs = function(cost) {
  let x = cost[0];
  let y = cost[1];
  let output;
  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    output = Math.min(x, y) + cost[i];
    x = y;
    y = output;
  }
  return output;
};
