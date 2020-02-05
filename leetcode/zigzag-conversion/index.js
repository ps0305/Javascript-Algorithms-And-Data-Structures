/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) {
    return s;
  }
  const rows = [...new Array(numRows)].map(() => '');
  let i = 0;
  while (i < s.length) {
    for (let j = 0; j < numRows && i < s.length; j++) {
      rows[j] += s[i];
      i += 1;
    }
    for (let j = numRows - 2; j > 0 && i < s.length; j--) {
      rows[j] += s[i];
      i += 1;
    }
  }
  return rows.join('');
};
