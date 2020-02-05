/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    if (!n) {
      return -1;
    }
    const queue = [];
    for (let i = 0; i < n; i++) {
      queue.push(i);
    }
    while (queue.length > 1) {
      const i = queue.shift();
      const j = queue.shift();
      if (knows(i, j)) {
        queue.push(j);
      } else {
        queue.push(i);
      }
    }
    const candidate = queue.shift();
    for (let i = 0; i < n; i++) {
      if (i !== candidate && (!knows(i, candidate) || knows(candidate, i))) {
        return -1;
      }
    }
    return candidate;
  };
};
