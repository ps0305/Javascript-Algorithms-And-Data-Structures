/* global Node */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, visited = new Map()) {
  if (!node) return node;
  if (visited.get(node)) {
    return visited.get(node);
  }
  const cloned = new Node(node.val, []);
  visited.set(node, cloned);
  for (const neighbor of node.neighbors) {
    cloned.neighbors.push(cloneGraph(neighbor, visited));
  }
  return cloned;
};
