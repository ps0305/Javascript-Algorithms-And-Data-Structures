/**
 * @param {number[][][]} schedule
 * @return {number[][]}
 */
var employeeFreeTime = function(schedule) {
  const timeline = createTimeline(schedule);
  const output = [];
  let nEvents = 0;
  let preNEvents;
  let preT;
  for (const [t, delta] of timeline) {
    nEvents += delta;
    if (preNEvents === 0 && nEvents > 0) {
      output.push([preT, t]);
    }
    preNEvents = nEvents;
    preT = t;
  }
  return output.filter(isValidOutput);
};

function isValidOutput([start, end]) {
  return end - start > 0;
}

function createTimeline(schedule) {
  const timeline = [];
  for (const employee of schedule) {
    for (const [start, end] of employee) {
      timeline.push([start, 1]);
      timeline.push([end, -1]);
    }
  }
  return timeline.sort((a, b) => a[0] - b[0]);
}
