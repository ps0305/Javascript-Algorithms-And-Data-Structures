/**
 * @param {number[]} stations
 * @param {number} K
 * @return {number}
 */
var minmaxGasDist = function(stations, K) {
  let left = 0;
  let right = findMaxDist(stations);
  while (right - left > 10 ** -6) {
    const mid = (left + right) / 2;
    const n = count(stations, mid);
    if (n <= K) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left;
};

function findMaxDist(stations) {
  let max = -Infinity;
  for (let i = 0; i < stations.length - 1; i++) {
    max = Math.max(max, stations[i + 1] - stations[i]);
  }
  return max;
}

function count(stations, dist) {
  let n = 0;
  for (let i = 0; i < stations.length - 1; i++) {
    if (stations[i + 1] - stations[i] > dist) {
      n += Math.floor((stations[i + 1] - stations[i]) / dist);
    }
  }
  return n;
}
