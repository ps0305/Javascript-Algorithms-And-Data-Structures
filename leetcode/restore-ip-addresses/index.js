/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s, start = 0, selected = [], output = []) {
  if (selected.length >= 4) {
    if (start === s.length) {
      output.push(selected.join('.'));
    }
    return output;
  }
  for (let length = 1; length <= s.length; length++) {
    const str = s.slice(start, start + length);
    if (isValid(str)) {
      selected.push(str);
      restoreIpAddresses(s, start + length, selected, output);
      selected.pop();
    } else {
      break;
    }
  }
  return output;
};

function isValid(str) {
  const n = parseInt(str);
  if (str[0] === '0') {
    return n === 0 && str.length === 1;
  }
  return n > 0 && n <= 255;
}
