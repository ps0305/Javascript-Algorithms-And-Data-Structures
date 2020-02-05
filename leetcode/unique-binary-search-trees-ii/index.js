/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

const createTrees = (start, end) => {
  if (start > end) {
    return [null];
  }
  if (start === end) {
    return [new TreeNode(start + 1)];
  }
  const output = [];
  for (let i = start; i <= end; i++) {
    const lefts = createTrees(start, i - 1);
    const rights = createTrees(i + 1, end);
    for (let j = 0; j < lefts.length; j++) {
      for (let k = 0; k < rights.length; k++) {
        const root = new TreeNode(i + 1);
        root.left = lefts[j];
        root.right = rights[k];
        output.push(root);
      }
    }
  }
  return output;
};

var generateTrees = function(n) {
  if (n <= 0) {
    return [];
  }
  return createTrees(0, n - 1);
};
