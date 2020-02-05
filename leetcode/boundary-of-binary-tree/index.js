/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
  if (!root) {
    return [];
  }
  const left = root.left ? findLeft(root) : [root];
  const leaves = findLeaves(root);
  const right = root.right ? findRight(root).reverse() : [root];
  const output = new Set();
  left.forEach((val) => output.add(val));
  leaves.forEach((val) => output.add(val));
  right.forEach((val) => output.add(val));
  return [...output].map((node) => node.val);
};

function findLeft(root, output = []) {
  output.push(root);
  if (root.left) {
    findLeft(root.left, output);
  } else if (root.right) {
    findLeft(root.right, output);
  }
  return output;
}

function findLeaves(root, output = []) {
  if (!root.left && !root.right) {
    output.push(root);
    return output;
  }
  if (root.left) {
    findLeaves(root.left, output);
  }
  if (root.right) {
    findLeaves(root.right, output);
  }
  return output;
}

function findRight(root, output = []) {
  output.push(root);
  if (root.right) {
    findRight(root.right, output);
  } else if (root.left) {
    findRight(root.left, output);
  }
  return output;
}
