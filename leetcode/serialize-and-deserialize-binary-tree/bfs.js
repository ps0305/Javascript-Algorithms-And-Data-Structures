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
  const output = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      output.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      output.push(node);
    }
  }
  return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const root = createNode(data.shift());
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      node.left = createNode(data.shift());
      node.right = createNode(data.shift());
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return root;
};

function createNode(val) {
  if (val === null || val === undefined) {
    return null;
  }
  return new TreeNode(val);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
