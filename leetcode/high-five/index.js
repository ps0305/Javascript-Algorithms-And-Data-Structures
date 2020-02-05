/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const map = {};
  for (const [id, score] of items) {
    if (!(id in map)) {
      map[id] = new PriorityQueue({
        comparator: (a, b) => {
          return a <= b;
        },
      });
    }
    map[id].enqueue(score);
    if (map[id].length > 5) {
      map[id].dequeue();
    }
  }
  const output = [];
  for (const id in map) {
    const arr = map[id].arr;
    const avg = Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
    output.push([id, avg]);
  }
  return output;
};

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    this.arr.push(val);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
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
