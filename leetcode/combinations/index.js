/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k, start = 1, selected = [], output = []) {
  if (selected.length >= k) {
    output.push([...selected]);
    return output;
  }
  for (let i = start; i <= n; i++) {
    selected.push(i);
    combine(n, k, i + 1, selected, output);
    selected.pop();
  }
  return output;
};

export default combine;
