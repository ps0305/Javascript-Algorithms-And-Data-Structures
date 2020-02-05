/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
  const map = {};
  for (const [p1, p2, delta] of transactions) {
    map[p1] = (map[p1] || 0) - delta;
    map[p2] = (map[p2] || 0) + delta;
  }
  const balances = Object.values(map).filter((val) => val !== 0);
  return dfs(balances, balances.length);
};

function dfs(balances, m, start = 0, nTransactions = 0) {
  const unbalanced = findUnbalanced(balances, m, start);
  if (unbalanced < 0) {
    return nTransactions;
  }
  let result = Infinity;
  for (let i = unbalanced + 1; i < m; i++) {
    if (balances[unbalanced] * balances[i] > 0) continue;
    balances[i] += balances[unbalanced];
    result = Math.min(result, dfs(balances, m, unbalanced + 1, nTransactions + 1));
    balances[i] -= balances[unbalanced];
  }
  return result;
}

function findUnbalanced(balances, m, start) {
  for (let i = start; i < m; i++) {
    if (balances[i] !== 0) {
      return i;
    }
  }
  return -1;
}
