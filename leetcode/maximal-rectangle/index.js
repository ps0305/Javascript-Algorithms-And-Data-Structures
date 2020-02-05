/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const arr = [...new Array(n).fill(0)];
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[j] = matrix[i][j] === '1' ? arr[j] + 1 : 0;
    }
    max = Math.max(max, findMax(arr));
  }
  return max;
};

function findMax(heights) {
  const stack = [];
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const area = getArea(heights, stack, i);
      max = Math.max(max, area);
    }
    stack.push(i);
  }
  while (stack.length) {
    const area = getArea(heights, stack, heights.length);
    max = Math.max(max, area);
  }
  return max;
}

function getArea(heights, stack, i) {
  const height = heights[stack.pop()];
  const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
  const area = width * height;
  return area;
}
