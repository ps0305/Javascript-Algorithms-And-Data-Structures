/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  const timeline = {};
  for (let i = 0; i < intervals.length; i++) {
    const { start, end } = intervals[i];
    timeline[start] = (timeline[start] || 0) + 1;
    timeline[end] = (timeline[end] || 0) - 1;
  }
  const keys = Object.keys(timeline);
  let n = 0;
  for (let i = 0; i < keys.length; i++) {
    n += timeline[keys[i]];
    if (n > 1) {
      return false;
    }
  }
  return true;
};
