/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const timeline = [];
  for (const [nPassenger, start, end] of trips) {
    timeline.push([start, nPassenger], [end, -nPassenger]);
  }
  timeline.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let nPassenger = 0;
  for (const [, delta] of timeline) {
    nPassenger += delta;
    if (nPassenger > capacity) {
      return false;
    }
  }
  return true;
};
