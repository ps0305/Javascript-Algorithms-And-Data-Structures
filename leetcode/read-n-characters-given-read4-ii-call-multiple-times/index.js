/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
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
  const arr = [];
  return function(buf, n) {
    let isEnd = false;
    while (arr.length < n && !isEnd) {
      const tmp = [];
      isEnd = read4(tmp) < 4;
      arr.push(...tmp);
    }
    buf.push(...arr.splice(0, n));
    return buf.length;
  };
};
