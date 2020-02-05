/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
const nTimes = 10;

var findSecretWord = function(wordlist, master) {
  let arr = [...wordlist];
  let candidate = wordlist[0];
  let nMatches = 0;
  for (let i = 0; i < nTimes; i++) {
    nMatches = master.guess(candidate);
    arr = arr.filter((w) => match(w, candidate) === nMatches);
    candidate = getBestCandidate(arr, candidate);
  }
};

function match(w1, w2) {
  let n = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] === w2[i]) {
      n += 1;
    }
  }
  return n;
}

function getBestCandidate(arr, candidate) {
  let max = 0;
  let str = '';
  for (const w1 of arr) {
    const nMatches = match(w1, candidate);
    if (nMatches >= max) {
      max = nMatches;
      str = w1;
    }
  }
  return str;
}
