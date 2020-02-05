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

function dfs(balances, m, nTransactions = 0) {
  const unbalanced = findUnbalanced(balances, m);
  if (unbalanced >= m) {
    return nTransactions;
  }
  let result = Infinity;
  const val = balances[unbalanced];
  balances[unbalanced] = 0;
  for (let i = unbalanced + 1; i < m; i++) {
    balances[i] += val;
    result = Math.min(result, dfs(balances, m, nTransactions + 1));
    balances[i] -= val;
  }
  balances[unbalanced] = val;
  return result;
}

function findUnbalanced(balances, m) {
  let p = 0;
  while (balances[p] === 0 && p < m) {
    p += 1;
  }
  return p;
}
