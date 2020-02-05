/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function(nums) {
  const map = createMap(nums);
  return dfs(map, [1, 1]);
};

function dfs(map, root, sum = 0) {
  if (!(root in map)) {
    return 0;
  }
  sum += map[root];
  if (!(left(root) in map) && !(right(root) in map)) {
    return sum;
  }
  return dfs(map, left(root), sum) + dfs(map, right(root), sum);
}

function left([d, p]) {
  return [d + 1, 2 * p - 1];
}

function right([d, p]) {
  return [d + 1, 2 * p];
}

function createMap(nums) {
  const map = {};
  for (const num of nums) {
    const d = Math.floor(num / 100);
    const p = Math.floor((num % 100) / 10);
    const val = num % 10;
    map[[d, p]] = val;
  }
  return map;
}
