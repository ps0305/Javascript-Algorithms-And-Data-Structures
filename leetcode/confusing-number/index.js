/**
 * @param {number} N
 * @return {boolean}
 */
var confusingNumber = function(N) {
  const map = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6',
  };
  const nStr = N + '';
  let num = '';
  for (const c of nStr) {
    if (!(c in map)) {
      return false;
    }
    num = map[c] + num;
  }
  return num !== nStr;
};
