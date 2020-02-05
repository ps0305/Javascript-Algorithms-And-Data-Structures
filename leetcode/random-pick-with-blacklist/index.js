/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
  const B = new Set(blacklist);
  const m = N - blacklist.length;
  const map = {};
  let j = m;
  for (const i of blacklist) {
    if (i < m) {
      while (B.has(j)) j += 1;
      map[i] = j;
      j += 1;
    }
  }
  this.m = m;
  this.map = map;
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const r = Math.floor(Math.random() * this.m);
  if (r in this.map) {
    return this.map[r];
  }
  return r;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(N, blacklist)
 * var param_1 = obj.pick()
 */
