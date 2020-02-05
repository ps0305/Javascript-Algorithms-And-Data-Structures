/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
  const [rs, re] = toBeRemoved;
  const arr = [];
  for (const [s, e] of intervals) {
    if (e <= rs || s >= re) {
      arr.push([s, e]);
    } else {
      if (s < rs) {
        arr.push([s, rs]);
      }
      if (e > re) {
        arr.push([re, e]);
      }
    }
  }
  return arr;
};
