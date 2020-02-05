/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const start = '0000';
  const set = new Set(deadends);
  if (set.has(start)) {
    return -1;
  }
  const visited1 = new Set();
  const visited2 = new Set();
  let queue1 = [start];
  let queue2 = [target];
  let nSteps = 0;
  while (queue1.length && queue2.length) {
    const [isFound1, next1] = bfs(queue1, set, visited1, visited2);
    if (isFound1) {
      return nSteps;
    }
    nSteps += 1;
    const [isFound2, next2] = bfs(queue2, set, visited2, visited1);
    if (isFound2) {
      return nSteps;
    }
    nSteps += 1;
    queue1 = next1;
    queue2 = next2;
  }
  return -1;
};

function bfs(queue, set, visited1, visited2) {
  const next = [];
  while (queue.length) {
    const str = queue.pop();
    if (visited2.has(str)) {
      return [true, next];
    }
    for (const candidate of createCandidates(str)) {
      if (!visited1.has(candidate) && !set.has(candidate)) {
        visited1.add(candidate);
        next.push(candidate);
      }
    }
  }
  return [false, next];
}

function createCandidates(str) {
  const output = [];
  for (let i = 0; i < str.length; i++) {
    const n = parseInt(str[i]);
    const s1 = str.substring(0, i) + (n + 1 < 10 ? n + 1 : 0) + str.substring(i + 1);
    const s2 = str.substring(0, i) + (n - 1 >= 0 ? n - 1 : 9) + str.substring(i + 1);
    output.push(s1, s2);
  }
  return output;
}
