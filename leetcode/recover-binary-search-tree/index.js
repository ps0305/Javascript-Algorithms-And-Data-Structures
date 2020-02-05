/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

const swap = (r1, r2) => {
  const tmp = r1.val;
  r1.val = r2.val;
  r2.val = tmp;
};

var recoverTree = function(root) {
  const stack = [];
  let ptr = root;
  let pre;
  let first;
  let second;
  while (ptr || stack.length) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      if (pre && pre.val > node.val) {
        if (!first) {
          first = pre;
        }
        second = node;
      }
      pre = node;
      ptr = node.right;
    }
  }
  swap(first, second);
};
