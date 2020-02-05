/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  const graph = createGraph(root);
  return bfs(graph, target.val, K);
};

function createGraph(root, graph = {}) {
  if (!root) {
    return graph;
  }
  if (!(root.val in graph)) graph[root.val] = [];
  if (root.left) {
    graph[root.val].push(root.left.val);
    if (!(root.left.val in graph)) graph[root.left.val] = [];
    graph[root.left.val].push(root.val);
    createGraph(root.left, graph);
  }
  if (root.right) {
    graph[root.val].push(root.right.val);
    if (!(root.right.val in graph)) graph[root.right.val] = [];
    graph[root.right.val].push(root.val);
    createGraph(root.right, graph);
  }
  return graph;
}

function bfs(graph, target, k) {
  if (!k) {
    return [target];
  }
  const visited = new Set([target]);
  let queue = [target];
  let level = 0;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const u = queue.shift();
      for (const v of graph[u]) {
        if (!visited.has(v)) {
          visited.add(v);
          next.push(v);
        }
      }
    }
    level += 1;
    if (level === k) {
      return next;
    }
    queue = next;
  }
  return [];
}
