/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
  if (K === 0) {
    return 1;
  }
  const max = Math.min(N, K + W);
  const prob = new Array(max + 1).fill(0);
  prob[0] = 1;
  let window = prob[0];
  for (let i = 1; i <= max; i++) {
    prob[i] = window * (1 / W);
    const next = i < K ? prob[i] : 0;
    const last = i - W >= 0 ? prob[i - W] : 0;
    window = window - last + next;
  }
  return sum(prob, K, max + 1);
};

function sum(arr, start, end) {
  let output = 0;
  for (let i = start; i < end; i++) {
    output += arr[i];
  }
  return output;
}
