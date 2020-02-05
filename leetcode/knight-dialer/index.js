/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
  const map = {
    0: [4, 6],
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [3, 9, 0],
    5: [],
    6: [1, 7, 0],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
  };
  let dp = new Array(10).fill(1);
  for (let i = 1; i < N; i++) {
    const next = new Array(10).fill(0);
    for (let j = 0; j < 10; j++) {
      next[j] = map[j].map((k) => dp[k]).reduce(addAndMod, 0);
    }
    dp = next;
  }
  return dp.reduce(addAndMod, 0);
};

function addAndMod(a, b) {
  const M = 10 ** 9 + 7;
  return (a + b) % M;
}
