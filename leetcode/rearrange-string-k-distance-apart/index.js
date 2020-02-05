/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const moveUp = (arr, i, comparator) => {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    swap(arr, i, p);
    moveUp(arr, p, comparator);
  }
};

const moveDown = (arr, i, comparator) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    swap(arr, i, next);
    moveDown(arr, next, comparator);
  }
};

class PriorityQueue {
  constructor({ comparator = (a, b) => a < b } = {}) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
    return this;
  }

  dequeue() {
    if (!this.arr.length) {
      return;
    }
    const element = this.arr.shift();
    if (this.arr.length) {
      this.arr.unshift(this.arr.pop());
      moveDown(this.arr, 0, this.comparator);
    }
    return element;
  }
}

const rearrangeString = function(s, k) {
  if (!k) {
    return s;
  }
  const counts = {};
  for (let i = 0; i < s.length; i++) {
    counts[s[i]] = (counts[s[i]] || 0) + 1;
  }
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      if (a.count !== b.count) {
        return a.count > b.count;
      }
      return a.index < b.index;
    },
  });
  const keys = Object.keys(counts);
  for (let i = 0; i < keys.length; i++) {
    pq.enqueue({
      char: keys[i],
      count: counts[keys[i]],
      index: i,
    });
  }
  let length = s.length;
  const output = [];
  while (pq.arr.length) {
    const tmp = [];
    const count = Math.min(k, length);
    for (let i = 0; i < count; i++) {
      const element = pq.dequeue();
      if (!element) {
        return '';
      }
      element.count -= 1;
      tmp.push(element);
      length -= 1;
    }
    output.push([...tmp]);
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].count > 0) {
        pq.enqueue(tmp[i]);
      }
    }
  }
  return output
    .map((arr) => {
      return arr.map(({ char }) => char).join('');
    })
    .join('');
};

export default rearrangeString;
