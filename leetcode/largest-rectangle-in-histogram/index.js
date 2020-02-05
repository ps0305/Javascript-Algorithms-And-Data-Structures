/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
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
};

function getArea(heights, stack, i) {
  const height = heights[stack.pop()];
  const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
  const area = width * height;
  return area;
}
