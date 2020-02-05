/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const graph = createGraph(N, times);
  const dist = new Array(N + 1).fill(Infinity);
  const pq = new PriorityQueue({
    comparator: (a, b) => a[1] <= b[1],
  });
  pq.enqueue([K, 0]);
  while (pq.length) {
    const [i, d] = pq.dequeue();
    if (d < dist[i]) {
      dist[i] = d;
      for (const [j, w] of graph[i]) {
        pq.enqueue([j, d + w]);
      }
    }
  }
  let max = -Infinity;
  for (let i = 1; i <= N; i++) {
    max = Math.max(max, dist[i]);
  }
  return max < Infinity ? max : -1;
};

function createGraph(N, times) {
  const graph = [...new Array(N + 1)].map(() => []);
  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }
  return graph;
}

class PriorityQueue {
  constructor({ comparator }) {
    this.comparator = comparator;
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
