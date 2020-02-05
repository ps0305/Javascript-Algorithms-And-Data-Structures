/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  const M = 10 ** 9 + 7;
  const m = A.length;
  const lefts = createLefts(A, m);
  const rights = createRights(A, m);
  let sum = 0;
  for (let i = 0; i < m; i++) {
    const nSubarr = (i - lefts[i]) * (rights[i] - i);
    sum += nSubarr * A[i];
    sum %= M;
  }
  return sum;
};

function createLefts(A, m) {
  const lefts = new Array(m).fill(0);
  const stack = [-1];
  for (let i = 0; i < m; i++) {
    while (stack.length > 1 && A[i] <= A[stack[stack.length - 1]]) {
      stack.pop();
    }
    lefts[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return lefts;
}

function createRights(A, m) {
  const rights = new Array(m).fill(0);
  const stack = [m];
  for (let i = m - 1; i >= 0; i--) {
    while (stack.length > 1 && A[i] < A[stack[stack.length - 1]]) {
      stack.pop();
    }
    rights[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return rights;
}
