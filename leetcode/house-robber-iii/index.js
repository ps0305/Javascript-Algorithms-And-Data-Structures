/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
  x: including root
  y: excluding root
*/

const fn = (root) => {
  if (!root) {
    return {
      x: 0,
      y: 0,
    };
  }

  const { x: lx, y: ly } = fn(root.left);
  const { x: rx, y: ry } = fn(root.right);

  return {
    x: root.val + ly + ry,
    y: Math.max(lx, ly) + Math.max(rx, ry),
  };
};

var rob = function(root) {
  const { x, y } = fn(root);
  return Math.max(x, y);
};
