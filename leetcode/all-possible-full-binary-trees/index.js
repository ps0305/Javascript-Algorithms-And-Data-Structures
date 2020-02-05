/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  if (N % 2 === 0) {
    return [];
  }
  if (N === 1) {
    return [new TreeNode(0)];
  }
  const output = [];
  for (let i = 1; i <= N - 1; i += 2) {
    const lefts = allPossibleFBT(i);
    const rights = allPossibleFBT(N - 1 - i);
    for (const left of lefts) {
      for (const right of rights) {
        const root = new TreeNode(0);
        root.left = left;
        root.right = right;
        output.push(root);
      }
    }
  }
  return output;
};
