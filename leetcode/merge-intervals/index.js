/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  const output = [];
  let ptr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (isOverlapped(ptr, intervals[i])) {
      ptr = [Math.min(ptr[0], intervals[i][0]), Math.max(ptr[1], intervals[i][1])];
    } else {
      output.push(ptr);
      ptr = intervals[i];
    }
  }
  output.push(ptr);
  return output;
};

function isOverlapped([s1, e1], [s2, e2]) {
  return s2 <= e1 && e2 >= s1;
}
