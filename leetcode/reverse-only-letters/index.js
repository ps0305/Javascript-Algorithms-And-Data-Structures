/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let output = '';
  let j = S.length - 1;
  for (let i = 0; i < S.length; i++) {
    if (!isLetter(S[i])) {
      output += S[i];
    } else {
      while (!isLetter(S[j])) {
        j -= 1;
      }
      output += S[j];
      j -= 1;
    }
  }
  return output;
};

function isLetter(c) {
  return /[a-zA-Z]/.test(c);
}
