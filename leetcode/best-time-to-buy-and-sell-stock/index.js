/**
 * @param {number[]} prices
 * @return {number}
 */

/*
  [7,1,5,3,6,4,9,0,9]
  [7,1,5,5,6,6,9,9,9]
  [7,1,1,1,1,1,1,0,0]
*/

const maxProfit = function(prices) {
  let min = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

export default maxProfit;
