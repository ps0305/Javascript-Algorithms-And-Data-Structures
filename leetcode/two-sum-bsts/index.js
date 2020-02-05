/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
  if (!root1 || !root2) {
    return false;
  }
  const set = createSet(root2);
  return helper(root1, set, target);
};

function helper(root, set, target) {
  if (!root) {
    return false;
  }
  if (set.has(target - root.val)) {
    return true;
  }
  return helper(root.left, set, target) || helper(root.right, set, target);
}

function createSet(root, output = new Set()) {
  if (!root) {
    return output;
  }
  output.add(root.val);
  createSet(root.left, output);
  createSet(root.right, output);
  return output;
}
