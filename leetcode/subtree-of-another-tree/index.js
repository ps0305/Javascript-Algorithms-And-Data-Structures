/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!s || !t) {
    return !s && !t;
  }
  if (s.val === t.val && isEqual(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(t1, t2) {
  if (!t1 || !t2) {
    return t1 === t2;
  }
  if (t1.val === t2.val) {
    return isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right);
  }
  return false;
}
