/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const freq = S.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      return freq[a] >= freq[b];
    },
  });
  Object.keys(freq).forEach((key) => pq.enqueue(key));
  const n = 2;
  let output = '';
  for (let i = 0; i < S.length; ) {
    const next = [];
    for (let j = 0; j < n && i < S.length; j++) {
      if (!pq.length) {
        return '';
      }
      const key = pq.dequeue();
      freq[key] -= 1;
      if (freq[key]) {
        next.push(key);
      }
      output += key;
      i += 1;
    }
    next.forEach((key) => pq.enqueue(key));
  }
  return output;
};

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
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
