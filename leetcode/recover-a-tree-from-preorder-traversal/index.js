/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  const stack = new Stack();
  let depth = 0;
  let num = 0;
  for (let i = 0; i < S.length; ) {
    [i, depth] = getDepth(S, i, 0);
    while (stack.length && stack.peek().depth >= depth) {
      stack.pop();
    }
    [i, num] = getNum(S, i, 0);
    const node = new TreeNode(num);
    // prettier-ignore
    connect(stack, node);
    stack.push({ depth, node });
  }
  return stack[0].node;
};

function connect(stack, node) {
  if (stack.length) {
    const parent = stack.peek().node;
    if (!parent.left) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }
}

function getDepth(S, i, depth) {
  while (S[i] === '-') {
    depth += 1;
    i += 1;
  }
  return [i, depth];
}

function getNum(S, i, num) {
  while (/[0-9]/.test(S[i])) {
    num = 10 * num + parseInt(S[i]);
    i += 1;
  }
  return [i, num];
}

class Stack extends Array {
  peek() {
    return this[this.length - 1];
  }
}
