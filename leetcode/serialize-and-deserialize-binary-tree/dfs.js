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
  let output = root ? root.val : '';
  if (root) {
    output += ',' + serialize(root.left);
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
var deserialize = function(data, nodes = data.split(',')) {
  const root = createNode(nodes.shift());
  if (!root) {
    return root;
  }
  root.left = deserialize(data, nodes);
  root.right = deserialize(data, nodes);
  return root;
};

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
