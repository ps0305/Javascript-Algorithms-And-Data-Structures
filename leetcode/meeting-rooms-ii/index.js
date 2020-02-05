/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const timeline = [];
  for (const [s, e] of intervals) {
    timeline.push([s, 1]);
    timeline.push([e, -1]);
  }
  timeline.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let count = 0;
  let max = 0;
  for (const [t, delta] of timeline) {
    count += delta;
    max = Math.max(max, count);
  }
  return max;
};
