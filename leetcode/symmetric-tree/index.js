/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [root];
  while (queue.length) {
    const next = [];
    if (!isRepeat(queue)) {
      return false;
    }
    while (queue.length) {
      const node = queue.shift();
      if (!node) continue;
      next.push(node.left);
      next.push(node.right);
    }
    queue = next;
  }
  return true;
};

const defaultGetter = (key, obj) => {
  return (obj[key] && obj[key].val) || null;
};

function isRepeat(arr, get = defaultGetter) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const isEqual = get(left, arr) === get(right, arr);
    if (!isEqual) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}
