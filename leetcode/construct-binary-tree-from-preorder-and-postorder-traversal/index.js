/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  const map = createMap(post);
  return createTree(pre, map, 0, pre.length, 0, post.length);
};

function createTree(pre, map, i, j, p, q) {
  if (i >= j || p >= q) {
    return null;
  }
  const root = new TreeNode(pre[i]);
  if (j - i > 1) {
    const leftRoot = pre[i + 1];
    const index = map[leftRoot];
    const length = index - p;
    root.left = createTree(pre, map, i + 1, i + 1 + length, p, index, index, q);
    root.right = createTree(pre, map, i + 1 + length, j, index, q);
  }
  return root;
}

function createMap(post) {
  const map = {};
  for (let i = 0; i < post.length; i++) {
    map[post[i]] = i + 1;
  }
  return map;
}
