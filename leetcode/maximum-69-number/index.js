/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  const str = num + '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '6') {
      return parseInt(str.substring(0, i) + '9' + str.substring(i + 1));
    }
  }
  return num;
};
