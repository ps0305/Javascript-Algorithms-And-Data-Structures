/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  const s1 = new Set(['0', '1', '8']);
  const s2 = new Set(['0', '1', '2', '5', '6', '8', '9']);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const s = i + '';
    if (isValid(s1, s2, s)) {
      count += 1;
    }
  }
  return count;
};

function isValid(s1, s2, str) {
  let output = false;
  for (const c of str) {
    if (!s2.has(c)) {
      return false;
    }
    output = output || !s1.has(c);
  }
  return output;
}
