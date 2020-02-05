/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
  sort(slots1);
  sort(slots2);
  let i = 0;
  let j = 0;
  while (i < slots1.length && j < slots2.length) {
    const t = merge(slots1[i], slots2[j]);
    if (t[1] - t[0] >= duration) {
      t[1] = t[0] + duration;
      return t;
    } else if (slots1[i][0] < slots2[j][0] || slots1[i][1] < slots2[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return [];
};

function merge([s1, e1], [s2, e2]) {
  return [Math.max(s1, s2), Math.min(e1, e2)];
}

function sort(arr) {
  return arr.sort((a, b) => {
    return a[0] - b[0];
  });
}
