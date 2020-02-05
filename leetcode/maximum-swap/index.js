/**
 * @param {number} num
 * @return {number}
 */
/*
  Starting from the beginning,
  search for the first existing greater value and swap with it.
*/
var maximumSwap = function(num) {
  const numStr = (num + '').split('').map((c) => parseInt(c));
  const map = createPosition(numStr);
  for (let i = 0; i < numStr.length; i++) {
    for (let n = 9; n >= 0; n--) {
      if (n in map && n > numStr[i]) {
        const j = map[n];
        if (j > i) {
          [numStr[i], numStr[j]] = [numStr[j], numStr[i]];
          return numStr.join('');
        }
      }
    }
  }
  return num;
};

// Last position of the given digit
function createPosition(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = i;
  }
  return map;
}
