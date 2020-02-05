/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function(routes, S, T) {
  if (S === T) {
    return 0;
  }
  const map = createMap(routes);
  return bfs(routes.map((arr) => new Set(arr)), S, T, map);
};

function bfs(routes, S, T, map) {
  const queue = [];
  for (const bus of map[S]) {
    queue.push([bus, 1]);
  }
  const visited = new Set();
  while (queue.length) {
    const [bus, nBuses] = queue.shift();
    const containsDest = routes[bus].has(T);
    if (containsDest) {
      return nBuses;
    }
    for (const route of routes[bus]) {
      for (const nextBus of map[route]) {
        if (nextBus !== bus && !visited.has(nextBus)) {
          visited.add(nextBus);
          queue.push([nextBus, nBuses + 1]);
        }
      }
    }
  }
  return -1;
}

function createMap(routes) {
  const map = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      const route = routes[i][j];
      if (!(route in map)) map[route] = [];
      map[route].push(i);
    }
  }
  return map;
}
