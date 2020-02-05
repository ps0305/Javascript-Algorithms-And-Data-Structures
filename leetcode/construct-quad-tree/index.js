/* global Node */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid, r1 = 0, r2 = grid.length, c1 = 0, c2 = grid.length) {
  if (isLeaf(grid, r1, r2, c1, c2)) {
    return new Node(grid[r1][c1] === 1, true, null, null, null, null);
  }
  const midR = Math.floor((r1 + r2) / 2);
  const midC = Math.floor((c1 + c2) / 2);
  const root = new Node(false, false);
  root.topLeft = construct(grid, r1, midR, c1, midC);
  root.topRight = construct(grid, r1, midR, midC, c2);
  root.bottomLeft = construct(grid, midR, r2, c1, midC);
  root.bottomRight = construct(grid, midR, r2, midC, c2);
  return root;
};

function isLeaf(grid, r1, r2, c1, c2) {
  let val = grid[r1][c1];
  for (let i = r1; i < r2; i++) {
    for (let j = c1; j < c2; j++) {
      if (grid[i][j] !== val) {
        return false;
      }
    }
  }
  return true;
}
