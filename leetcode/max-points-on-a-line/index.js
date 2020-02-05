/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (!points.length) {
    return 0;
  }
  const m = points.length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    const freq = {};
    let nEquals = 0;
    let maxFreq = 0;
    for (let j = i + 1; j < m; j++) {
      if (isEqual(points[i], points[j])) {
        nEquals += 1;
        continue;
      }
      const slope = getSlope(points[i], points[j]);
      freq[slope] = (freq[slope] || 0) + 1;
      maxFreq = Math.max(maxFreq, freq[slope]);
    }
    max = Math.max(max, 1 + maxFreq + nEquals);
  }
  return max;
};

function getSlope(p1, p2) {
  if (p1[0] === p2[0]) {
    return Infinity;
  }
  // overcome javascript division precision issue by multipling with a very large number
  return (1000000000000 * (p1[1] - p2[1])) / (p1[0] - p2[0]);
}

function isEqual(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}
