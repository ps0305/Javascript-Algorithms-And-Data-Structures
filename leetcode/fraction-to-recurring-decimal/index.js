/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator * denominator < 0 || numerator < 0 || denominator < 0) {
    return (
      (numerator * denominator < 0 ? '-' : '') +
      fractionToDecimal(Math.abs(numerator), Math.abs(denominator))
    );
  }
  if (numerator % denominator === 0) {
    return numerator / denominator + '';
  }
  const map = {};
  let output = '' + Math.floor(numerator / denominator) + '.';
  let num = (numerator % denominator) * 10;
  while (num > 0) {
    if (num in map) {
      const i = map[num];
      return output.substring(0, i) + '(' + output.substring(i) + ')';
    }
    map[num] = output.length;
    output += Math.floor(num / denominator);
    num = (num % denominator) * 10;
  }
  return output;
};
