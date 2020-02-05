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
  if (!root) {
    return 'null';
  }
  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, arr = data.split(',')) {
  if (!arr.length) {
    return null;
  }
  const root = createNode(arr.shift());
  if (root) {
    root.left = deserialize(data, arr);
    root.right = deserialize(data, arr);
  }
  return root;
};

function createNode(val) {
  if (val === 'null') {
    return null;
  }
  return new TreeNode(parseInt(val));
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
