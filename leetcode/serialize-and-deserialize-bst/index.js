/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let output = '';
  if (root) {
    output += root.val;
  }
  if (root && root.left) {
    output += ',' + serialize(root.left);
  }
  if (root && root.right) {
    output += ',' + serialize(root.right);
  }
  return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, nodes = toArr(data), min = -Infinity, max = Infinity) {
  if (!nodes.length || nodes[0] <= min || nodes[0] >= max) {
    return null;
  }
  const root = createNode(nodes.shift());
  root.left = deserialize(data, nodes, min, root.val);
  root.right = deserialize(data, nodes, root.val, max);
  return root;
};

function toArr(str) {
  return str
    .split(',')
    .filter((c) => !!c)
    .map((c) => parseInt(c));
}

function createNode(val) {
  if (val === '') {
    return null;
  }
  return new TreeNode(val);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
