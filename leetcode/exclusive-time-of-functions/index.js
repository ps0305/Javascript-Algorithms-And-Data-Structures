/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const output = new Array(n).fill(0);
  const callStack = [];
  let updatedTime;
  for (const log of logs) {
    const [fn, event, t] = parse(log);
    if (callStack.length) {
      const delta = t - updatedTime;
      const peekFn = callStack[callStack.length - 1];
      output[peekFn] += delta;
    }
    updatedTime = t;
    if (event === 'start') {
      callStack.push(fn);
    } else if (event === 'end') {
      callStack.pop();
    }
  }
  return output;
};

function parse(log) {
  const output = log.split(':');
  output[0] = parseInt(output[0]);
  output[2] = parseInt(output[2]);
  if (output[1] === 'end') {
    output[2] += 1;
  }
  return output;
}
