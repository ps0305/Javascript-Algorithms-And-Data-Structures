/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
  const items = new Set();
  for (let i = 0; i < n; i++) {
    if (hasCycle(beforeItems, i, items)) {
      return [];
    }
  }
  const groupDependencies = createGroupDependencies(n, m, group, beforeItems);
  const groupOrderSet = new Set();
  for (const i in groupDependencies) {
    if (hasCycle(groupDependencies, parseInt(i), groupOrderSet)) {
      return [];
    }
  }
  const map = groupBy((i) => createGroupId(group, i), items);
  const output = [];
  for (const i of groupOrderSet) {
    if (i in map) {
      output.push(...map[i]);
    }
  }
  return output;
};

function groupBy(createKey, arr) {
  const map = {};
  for (const item of arr) {
    const key = createKey(item);
    if (!(key in map)) map[key] = [];
    map[key].push(item);
  }
  return map;
}

function createPositionMap(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  return map;
}

function createGroupDependencies(n, m, group, beforeItems) {
  const graph = {};
  for (let i = 0; i < m; i++) {
    graph[i] = new Set();
  }
  for (let i = 0; i < n; i++) {
    if (group[i] < 0) {
      const id = createGroupId(group, i);
      graph[id] = new Set();
    }
  }
  for (let i = 0; i < n; i++) {
    const idi = createGroupId(group, i);
    for (const j of beforeItems[i]) {
      const idj = createGroupId(group, j);
      if (idi !== idj) {
        graph[idi].add(idj);
      }
    }
  }
  return graph;
}

function createGroupId(group, i) {
  return group[i] >= 0 ? group[i] : -i;
}

function hasCycle(graph, i, output, stack = new Set()) {
  if (stack.has(i)) {
    return true;
  }
  if (output.has(i)) {
    return false;
  }
  stack.add(i);
  for (const j of graph[i]) {
    if (hasCycle(graph, j, output, stack)) {
      return true;
    }
  }
  stack.delete(i);
  output.add(i);
  return false;
}
