/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.arr = [];
  const m = times.length;
  const votes = {};
  let winner = null;
  for (let i = 0; i < m; i++) {
    const p = persons[i];
    votes[p] = (votes[p] || 0) + 1;
    winner = winner === null || votes[p] >= votes[winner] ? p : winner;
    this.arr.push([winner, times[i]]);
  }
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  const index = upperBound(this.arr, (a) => t >= a[1]);
  return this.arr[index - 1][0];
};

function upperBound(arr, comparator) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(arr[mid])) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
