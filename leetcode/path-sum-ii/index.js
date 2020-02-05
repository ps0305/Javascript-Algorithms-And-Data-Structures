/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum, selected = [], selectedSum = 0, output = []) {
  if (!root) {
    return output;
  }
  selected.push(root.val);
  selectedSum += root.val;
  if (root.left || root.right) {
    pathSum(root.left, sum, selected, selectedSum, output);
    pathSum(root.right, sum, selected, selectedSum, output);
  } else {
    if (selectedSum === sum) {
      output.push([...selected]);
    }
  }
  selected.pop();
  selectedSum -= root.val;
  return output;
};
