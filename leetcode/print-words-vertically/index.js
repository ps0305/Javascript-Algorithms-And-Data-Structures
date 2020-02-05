/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
  const words = s.split(' ');
  const max = Math.max(...words.map((word) => word.length));
  const output = new Array(max).fill(null).map(() => '');
  for (let i = 0; i < max; i++) {
    for (const word of words) {
      output[i] += i < word.length ? word[i] : ' ';
    }
    output[i] = removeTrailingSpace(output[i]);
  }
  return output;
};

function removeTrailingSpace(str) {
  let i = str.length - 1;
  while (str[i] === ' ') {
    i -= 1;
  }
  return str.substring(0, i + 1);
}
