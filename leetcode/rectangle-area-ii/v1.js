/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
  const map = createMap(rectangles);
  const st = new SegmentTree(0, 10 ** 8);
  let preY = null;
  let area = 0;
  for (const key in map) {
    const y = parseInt(key);
    if (preY !== null) {
      area += (y - preY) * st.total;
    }
    for (const [start, end, val] of map[key]) {
      st.update(start, end, val);
    }
    preY = y;
  }
  return area;
};

function createMap(rectangles) {
  const map = {};
  for (const [x1, y1, x2, y2] of rectangles) {
    if (!(y1 in map)) map[y1] = [];
    if (!(y2 in map)) map[y2] = [];
    map[y1].push([x1, x2, 1]);
    map[y2].push([x1, x2, -1]);
  }
  return map;
}

function bfs(root) {
  const props = ['start', 'end', 'val', 'total'];
  let queue = [root];
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      console.log(props.reduce((arr, p) => [...arr, p, node[p]], []).join(' '));
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    queue = next;
    console.log('--');
  }
  console.log('----');
}

class SegmentTree {
  constructor(start, end) {
    this.root = new Node(start, end);
  }

  update(start, end, val, node = this.root) {
    node.createChildren().sync();
    // node out of range
    if (start >= node.end || end <= node.start) {
      return;
    }
    // node in range
    if (start <= node.start && end >= node.end) {
      node.val += val;
      node.left.lazy += val;
      node.right.lazy += val;
      if (node.val > 0) {
        node.total = node.end - node.start;
        return;
      }
    }
    if (node.end - node.start > 1) {
      this.update(start, end, val, node.left);
      this.update(start, end, val, node.right);
    }
    node.total = node.left.total + node.right.total;
  }

  query(start, end, node = this.root) {}

  get total() {
    return this.root.total;
  }
}

class Node {
  constructor(start, end, val = 0, lazy = 0, total = 0) {
    this.start = start;
    this.end = end;
    this.val = val;
    this.lazy = lazy;
    this.total = total;
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
      this.val += this.lazy;
      // prettier-ignore
      this.total = this.val > 0
        ? this.end - this.start
        : this.left.total + this.right.total;
      this.left.lazy = this.lazy;
      this.right.lazy = this.lazy;
      this.lazy = 0;
    }
    return this;
  }
}
