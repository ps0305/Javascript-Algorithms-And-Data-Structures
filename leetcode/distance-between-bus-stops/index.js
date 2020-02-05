/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  const m = distance.length;
  const dist = new Array(m).fill(Infinity);
  const pq = new PriorityQueue({
    comparator: (a, b) => dist[a] < dist[b],
  });
  dist[start] = 0;
  pq.enqueue(start);
  while (pq.length) {
    const p = pq.dequeue();
    const left = (p + m - 1) % m;
    if (dist[p] + distance[left] < dist[left]) {
      dist[left] = dist[p] + distance[left];
      pq.enqueue(left);
    }
    const right = (p + m + 1) % m;
    if (dist[p] + distance[p] < dist[right]) {
      dist[right] = dist[p] + distance[p];
      pq.enqueue(right);
    }
  }
  return dist[destination];
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
