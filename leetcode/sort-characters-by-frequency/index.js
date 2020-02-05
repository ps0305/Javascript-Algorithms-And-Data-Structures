/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  // prettier-ignore
  const freq = s
    .split('')
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  // prettier-ignore
  const bucket = Object
    .entries(freq)
    .reduce((acc, [char, count]) => {
      if (!(count in acc)) acc[count] = [];
      acc[count].push(char);
      return acc;
    }, {});
  let output = '';
  for (let i = s.length; i >= 0; i--) {
    if (i in bucket) {
      for (const c of bucket[i]) {
        output += c.repeat(i);
      }
    }
  }
  return output;
};
