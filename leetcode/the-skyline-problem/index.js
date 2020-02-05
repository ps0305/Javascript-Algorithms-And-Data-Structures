/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const arr = createArray(buildings);
  const pq = new PriorityQueue({
    comparator: (a, b) => a >= b,
  });
  const output = [];
  let h = 0;
  for (const [x, y] of arr) {
    if (y > 0) {
      pq.enqueue(y);
    } else if (y < 0) {
      pq.delete(-y);
    }
    if (pq.peek !== h) {
      h = pq.peek || 0;
      output.push([x, h]);
    }
  }
  return output;
};

function createArray(buildings) {
  const arr = [];
  for (const [left, right, height] of buildings) {
    arr.push([left, height]);
    arr.push([right, -height]);
  }
  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  return arr;
}

class PriorityQueue {
  constructor({ comparator, isEqual = (a, b) => a === b }) {
    this.comparator = comparator;
    this.isEqual = isEqual;
    this.arr = [];
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  delete(element) {
    const i = this.arr.findIndex((target) => this.isEqual(target, element));
    if (i >= 0) {
      this.arr[i] = this.arr[this.arr.length - 1];
      this.arr.pop();
      moveDown(this.arr, i, this.comparator);
    }
  }

  get peek() {
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
}
