/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  const output = new Set();
  let i = 0;
  let j = 0;
  let sum = x ** i + y ** j;
  while (sum <= bound) {
    while (sum <= bound) {
      output.add(sum);
      if (y === 1) break;
      j += 1;
      sum = x ** i + y ** j;
    }
    i += 1;
    if (x === 1) break;
    j = 0;
    sum = x ** i + y ** j;
  }
  return [...output];
};
