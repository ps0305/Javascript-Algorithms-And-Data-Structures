/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

/*
  Encode a binary tree using dfs path.
*/
const dfs = (root, output, hash = {}) => {
  if (!root) {
    return 'x';
  }
  const key = root.val + dfs(root.left, output, hash) + dfs(root.right, output, hash);
  if (hash[key] === 1) {
    output.push(root);
  }
  hash[key] = (hash[key] || 0) + 1;
  return key;
};

var findDuplicateSubtrees = function(root) {
  const output = [];
  dfs(root, output);
  return output;
};
