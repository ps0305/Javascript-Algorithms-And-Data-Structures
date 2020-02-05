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
  const dp = [...new Array(N + 1)].map(() => []);
  dp[1].push(new TreeNode(0));
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= i - 1; j++) {
      const lefts = dp[j].map(clone);
      const rights = dp[i - j - 1].map(clone);
      for (const left of lefts) {
        for (const right of rights) {
          const root = new TreeNode(0);
          root.left = left;
          root.right = right;
          dp[i].push(root);
        }
      }
    }
  }
  return dp[N];
};

function clone(root) {
  if (!root) {
    return null;
  }
  const cloned = new TreeNode(0);
  cloned.left = clone(root.left);
  cloned.right = clone(root.right);
  return cloned;
}
