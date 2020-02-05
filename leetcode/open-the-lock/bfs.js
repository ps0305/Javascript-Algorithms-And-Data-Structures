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
  const visited = new Set([start]);
  let queue = [start];
  let nSteps = 0;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const str = queue.pop();
      if (str === target) {
        return nSteps;
      }
      for (const candidate of createCandidates(str)) {
        if (!visited.has(candidate) && !set.has(candidate)) {
          visited.add(candidate);
          next.push(candidate);
        }
      }
    }
    nSteps += 1;
    queue = next;
  }
  return -1;
};

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
