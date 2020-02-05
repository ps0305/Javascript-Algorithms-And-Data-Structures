/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let output = '';
  for (const str of strs) {
    output += str.length + ':' + str;
  }
  return output;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  const output = [];
  for (let i = 0; i < s.length; ) {
    const j = s.indexOf(':', i);
    const length = parseInt(s.substring(i, j));
    output.push(s.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return output;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
