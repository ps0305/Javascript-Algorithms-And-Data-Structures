/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  const predecessors = createIterator(root, target, 'predecessor');
  const successors = createIterator(root, target, 'successor');
  const output = [];
  while (output.length < k) {
    if (predecessors.hasNext() && successors.hasNext()) {
      const pre = predecessors.peek();
      const suc = successors.peek();
      const next =
        Math.abs(target - pre) < Math.abs(target - suc)
          ? predecessors.next().value
          : successors.next().value;
      output.push(next);
    } else {
      const next = predecessors.hasNext() ? predecessors.next().value : successors.next().value;
      output.push(next);
    }
  }
  return output;
};

function createIterator(root, target, type) {
  const stack = [];
  let ptr = root;
  while (ptr) {
    if (target > ptr.val) {
      if (type === 'predecessor') {
        stack.push(ptr);
      }
      ptr = ptr.right;
    } else {
      if (type === 'successor') {
        stack.push(ptr);
      }
      ptr = ptr.left;
    }
  }
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (!stack.length) return { done: true };
      const top = stack.pop();
      if (type === 'predecessor' && top.left) {
        ptr = top.left;
        while (ptr) {
          stack.push(ptr);
          ptr = ptr.right;
        }
      }
      if (type === 'successor' && top.right) {
        ptr = top.right;
        while (ptr) {
          stack.push(ptr);
          ptr = ptr.left;
        }
      }
      return {
        value: top.val,
        done: false,
      };
    },
    hasNext() {
      return stack.length > 0;
    },
    peek() {
      return stack[stack.length - 1].val;
    },
  };
}
