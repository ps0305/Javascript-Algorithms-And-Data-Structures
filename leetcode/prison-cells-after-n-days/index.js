/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  N = N % 14 > 0 ? N % 14 : 14;
  const m = cells.length;
  let arr = [...cells];
  for (let i = 0; i < N; i++) {
    const next = new Array(m).fill(0);
    for (let j = 1; j < m - 1; j++) {
      next[j] = arr[j - 1] === arr[j + 1] ? 1 : 0;
    }
    arr = next;
  }
  return arr;
};
