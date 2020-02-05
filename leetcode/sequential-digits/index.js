/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const output = [];
  for (let i = 1; i <= 9; i++) {
    helper(low, high, output, i, i);
  }
  return output.sort((a, b) => a - b);
};

function helper(low, high, output, i, sum) {
  if (sum > high) {
    return;
  }
  if (sum >= low) {
    output.push(sum);
  }
  if (i + 1 <= 9) {
    helper(low, high, output, i + 1, sum * 10 + i + 1);
  }
}
