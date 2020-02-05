/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const [graph, prices] = createGraph(n, flights);
  const queue = [[src, -1, 0]];
  let min = Infinity;
  while (queue.length) {
    const [u, nStops, price] = queue.shift();
    if (u === dst) {
      min = Math.min(min, price);
      continue;
    }
    for (const v of graph[u]) {
      if (nStops + 1 <= K && price + prices[u][v] <= min) {
        queue.push([v, nStops + 1, price + prices[u][v]]);
      }
    }
  }
  return min < Infinity ? min : -1;
};

function createGraph(n, flights) {
  const graph = [...new Array(n)].map(() => []);
  const prices = [...new Array(n)].map(() => new Array(n).fill(0));
  for (const [u, v, price] of flights) {
    graph[u].push(v);
    prices[u][v] = price;
  }
  return [graph, prices];
}
