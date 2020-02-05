/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s, start = 0, end = s.length - 1, parens = findParens(s)) {
  if (!s) {
    return null;
  }
  let i = start;
  let num = 0;
  let sign = 1;
  while (/[0-9|+|-]/.test(s[i])) {
    if (s[i] === '+') {
      sign = 1;
    } else if (s[i] === '-') {
      sign = -1;
    } else {
      num = 10 * num + parseInt(s[i]);
    }
    i += 1;
  }
  num = sign * num;
  const root = new TreeNode(num);
  if (i <= end && s[i] === '(') {
    root.left = str2tree(s, i + 1, parens[i] - 1, parens);
    i = parens[i] + 1;
  }
  if (i <= end && s[i] === '(') {
    root.right = str2tree(s, i + 1, parens[i] - 1, parens);
  }
  return root;
};

function findParens(s) {
  const map = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      map[stack.pop()] = i;
    }
  }
  return map;
}
