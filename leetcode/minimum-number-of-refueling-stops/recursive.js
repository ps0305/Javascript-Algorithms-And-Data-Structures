/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  let output = Infinity;

  (function helper(target, fuel, stations, index, x, nStops, memo) {
    const key = createKey(fuel, index, x, nStops);
    if (key in memo) {
      return memo[key];
    }
    if (x + fuel >= target || nStops >= output) {
      output = nStops;
      memo[key] = nStops;
      return memo[key];
    }
    let min = Infinity;
    for (let i = stations.length - 1; i >= index; i--) {
      const [p, gas] = stations[i];
      const dist = p - x;
      if (fuel - dist >= 0) {
        const result = helper(target, fuel - dist + gas, stations, i + 1, p, nStops + 1, memo);
        min = Math.min(min, result);
      }
    }
    memo[key] = min;
    return memo[key];
  })(target, startFuel, stations, 0, 0, 0, {});

  return output < Infinity ? output : -1;
};

function createKey(...args) {
  let output = '';
  for (const arg of args) {
    output += String.fromCharCode(arg) + ':';
  }
  return output;
}
