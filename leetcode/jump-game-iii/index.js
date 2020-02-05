/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const i = queue.shift();
    if (arr[i] === 0) {
      return true;
    }
    if (!visited.has(i + arr[i])) {
      visited.add(i + arr[i]);
      queue.push(i + arr[i]);
    }
    if (!visited.has(i - arr[i])) {
      visited.add(i - arr[i]);
      queue.push(i - arr[i]);
    }
  }
  return false;
};
