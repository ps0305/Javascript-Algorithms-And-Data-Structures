/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    const arr = [];
    let isEof = false;
    while (arr.length < n && !isEof) {
      const tmp = [];
      isEof = read4(tmp) < 4;
      arr.push(...tmp);
    }
    buf.push(...arr.slice(0, n));
    return buf.length;
  };
};
