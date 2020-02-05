/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const m = height.length;
  const left = new Array(m).fill(0);
  const right = new Array(m).fill(0);
  left[0] = height[0];
  right[m - 1] = height[m - 1];
  for (let i = 1; i < m; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }
  for (let i = m - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }
  let sum = 0;
  for (let i = 0; i < m; i++) {
    const delta = Math.min(left[i], right[i]) - height[i];
    sum += delta >= 0 ? delta : 0;
  }
  return sum;
};
