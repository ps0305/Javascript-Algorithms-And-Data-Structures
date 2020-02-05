/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  if (!data.length) {
    return false;
  }
  for (let i = 0; i < data.length; ) {
    if (data[i] >= 0b100000000) {
      return false;
    }
    const nBytes = getNBytes(data[i]);
    if (nBytes < 0) {
      return false;
    }
    for (let j = 1; j < nBytes; j++) {
      if (i + j > data.length || (data[i + j] & 0b11000000) !== 0b10000000) {
        return false;
      }
    }
    i += nBytes;
  }
  return true;
};

function getNBytes(n) {
  if ((n & 0b10000000) === 0) {
    return 1;
  }
  if ((n & 0b11100000) === 0b11000000) {
    return 2;
  }
  if ((n & 0b11110000) === 0b11100000) {
    return 3;
  }
  if ((n & 0b11111000) === 0b11110000) {
    return 4;
  }
  return -1;
}
