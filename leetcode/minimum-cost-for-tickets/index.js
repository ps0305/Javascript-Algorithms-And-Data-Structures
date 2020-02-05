/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const tickets = createTickets(costs);
  const lastDay = days[days.length - 1];
  const set = new Set(days);
  const dp = new Array(lastDay + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= lastDay; i++) {
    dp[i] = helper({ set, dp, i, tickets });
  }
  return dp[lastDay];
};

function helper({ set, dp, i, tickets }) {
  if (!set.has(i)) {
    return dp[i - 1];
  }
  let min = Infinity;
  for (const [validDays, cost] of tickets) {
    const value = (i - validDays >= 0 ? dp[i - validDays] : 0) + cost;
    min = Math.min(min, value);
  }
  return min;
}

function createTickets(costs) {
  const [c1, c7, c30] = costs;
  const tickets = [
    [1, c1],
    [7, c7],
    [30, c30],
  ];
  return tickets;
}
