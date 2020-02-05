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
var findSecondMinimumValue = function(root, mins = [Infinity, Infinity]) {
  const index = findIndex(mins, root.val);
  mins.splice(index, 0, root.val);
  mins.pop();
  if (root.left && root.right) {
    if (!(root.left.val > mins[mins.length - 1])) {
      findSecondMinimumValue(root.left, mins);
    }
    if (!(root.right.val > mins[mins.length - 1])) {
      findSecondMinimumValue(root.right, mins);
    }
  }
  return mins[1] < Infinity ? mins[1] : -1;
};

function findIndex(arr, val) {
  if (val < arr[0]) {
    return 0;
  } else if (val < arr[1] && val > arr[0]) {
    return 1;
  }
  return 2;
}
