/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
  const M = 10 ** 9 + 7;
  const intervals = createIntervals(rectangles);
  const [xArr, xMap] = createXArrayAndXMap(rectangles);
  const map = groupBy((itvl) => itvl[2], intervals);
  const yArr = Object.keys(map).map((key) => parseInt(key));
  const st = new SegmentTree(xArr.length);
  let preY = yArr[0];
  let area = 0;
  for (const y of yArr) {
    for (const i of st.activeIndexes) {
      area += (y - preY) * (xArr[i + 1] - xArr[i]);
      area %= M;
    }
    for (const [x1, x2, , delta] of map[y]) {
      st.update(xMap[x1], xMap[x2], delta, xArr);
    }
    preY = y;
  }
  return area;
};

class SegmentTree {
  constructor(length) {
    this.arr = new Array(length).fill(0);
  }

  update(start, end, delta) {
    for (let i = start; i < end; i++) {
      this.arr[i] += delta;
    }
  }

  get activeIndexes() {
    const indexes = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > 0) {
        indexes.push(i);
      }
    }
    return indexes;
  }
}

function createIntervals(rectangles) {
  const intervals = [];
  for (const [x1, y1, x2, y2] of rectangles) {
    intervals.push([x1, x2, y1, 1], [x1, x2, y2, -1]);
  }
  return intervals;
}

function createXArrayAndXMap(rectangles) {
  const arr = [];
  for (const [x1, , x2] of rectangles) {
    arr.push(x1, x2);
  }
  const xArr = [...new Set(arr)].sort((a, b) => a - b);
  const xMap = xArr.reduce((map, val, i) => {
    map[val] = i;
    return map;
  }, {});
  return [xArr, xMap];
}

function groupBy(createKey, arr) {
  const map = {};
  for (const val of arr) {
    const key = createKey(val);
    if (!(key in map)) map[key] = [];
    map[key].push(val);
  }
  return map;
}
