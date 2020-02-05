/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  const map = createInvertedIndex(source);
  let j = 0;
  let nSeqs = 1;
  for (const c of target) {
    if (map[0][charCode(c)] === -1) {
      return -1;
    }
    if (j >= map.length || map[j][charCode(c)] === -1) {
      nSeqs += 1;
      j = 0;
    }
    j = map[j][charCode(c)] + 1;
  }
  return nSeqs;
};

function createInvertedIndex(str) {
  const m = str.length;
  const n = 26;
  const map = [...new Array(m)].map(() => new Array(n).fill(-1));
  map[m - 1][charCode(str[m - 1])] = m - 1;
  for (let i = m - 2; i >= 0; i--) {
    copy(map[i], map[i + 1]);
    map[i][charCode(str[i])] = i;
  }
  return map;
}

function charCode(c) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
}

function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr2[i];
  }
}
