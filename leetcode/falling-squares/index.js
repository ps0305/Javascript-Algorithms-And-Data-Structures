/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
  const st = new SegmentTree(0, 10 ** 8);
  const output = [];
  for (const [x, length] of positions) {
    const currentHeight = st.query(x, x + length);
    st.update(x, x + length, currentHeight + length);
    output.push(st.max);
  }
  return output;
};

class SegmentTree {
  constructor(start, end) {
    this.root = new Node(start, end);
  }

  update(start, end, val, node = this.root) {
    node.createChildren().sync();
    // node in range
    if (start <= node.start && end >= node.end) {
      node.max = val;
      node.left.lazy = val;
      node.right.lazy = val;
      return;
    }
    // node out of range
    if (end <= node.start || start >= node.end) {
      return;
    }
    this.update(start, end, val, node.left);
    this.update(start, end, val, node.right);
    node.max = Math.max(node.left.max, node.right.max);
  }

  query(start, end, node = this.root) {
    node.createChildren().sync();
    // node in range
    if (start <= node.start && end >= node.end) {
      return node.max;
    }
    // node out of range
    if (end <= node.start || start >= node.end) {
      return 0;
    }
    // prettier-ignore
    return Math.max(
      this.query(start, end, node.left),
      this.query(start, end, node.right),
    );
  }

  get max() {
    return this.root.max;
  }
}

class Node {
  constructor(start, end, max = 0, lazy = 0) {
    this.start = start;
    this.end = end;
    this.max = max;
    this.lazy = lazy;
    this.left = null;
    this.right = null;
  }

  createChildren() {
    if (!this.left && !this.right) {
      const mid = Math.floor((this.start + this.end) / 2);
      this.left = new Node(this.start, mid, 0, this.lazy);
      this.right = new Node(mid, this.end, 0, this.lazy);
    }
    return this;
  }

  sync() {
    if (this.lazy > 0) {
      this.max = this.lazy;
      this.left.lazy = this.lazy;
      this.right.lazy = this.lazy;
      this.lazy = 0;
    }
    return this;
  }
}
