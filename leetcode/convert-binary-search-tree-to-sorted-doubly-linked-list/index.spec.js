import { insert, inOrder } from 'data-structure/bst';

import treeToDoublyList from './index';

const toArray = (root) => {
  const output = [root];
  let ptr = root.right;
  while (ptr && ptr !== root) {
    output.push(ptr);
    ptr = ptr.right;
  }
  return output;
};

test('treeToDoublyList', () => {
  const data = [4, 2, 1, 3, 6, 5, 7];
  let root;
  for (let i = 0; i < data.length; i++) {
    root = insert(root, data[i]);
  }
  const listRoot = treeToDoublyList(root);
  const result = toArray(listRoot).map((node) => ({
    val: node.val,
    left: node.left.val,
    righ: node.right.val,
  }));
  const expectedResult = [
    { val: 1, left: 7, righ: 2 },
    { val: 2, left: 1, righ: 3 },
    { val: 3, left: 2, righ: 4 },
    { val: 4, left: 3, righ: 5 },
    { val: 5, left: 4, righ: 6 },
    { val: 6, left: 5, righ: 7 },
    { val: 7, left: 6, righ: 1 },
  ];
  expect(result).toEqual(expectedResult);
});
