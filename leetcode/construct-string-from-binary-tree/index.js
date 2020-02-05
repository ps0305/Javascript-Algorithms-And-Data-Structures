/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) {
    return '';
  }
  const left = tree2str(t.left);
  const right = tree2str(t.right);
  let output = t.val + '';
  if (left || (!left && right)) {
    output += '(' + left + ')';
  }
  if (right) {
    output += '(' + right + ')';
  }
  return output;
};
