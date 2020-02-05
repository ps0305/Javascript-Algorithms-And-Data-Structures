/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function(low, high) {
  const arr = createArray(low, high);
  const output = [];
  while (join(arr) < high) {
    helper(arr, 0, low, high, output);
    arr.unshift(1);
  }
  return output;
};

function helper(arr, start, low, high, output) {
  if (start >= arr.length) {
    const sum = join(arr);
    if (sum >= low) {
      output.push(sum);
    }
    return output;
  }
  while (arr[start] < 10 && join(arr) <= high) {
    if (isStepping(arr, start)) {
      helper(arr, start + 1, low, high, output);
    }
    arr[start] += 1;
  }
  arr[start] = 0;
  return output;
}

function isStepping(arr, i) {
  if (i === 0) {
    return true;
  }
  return Math.abs(arr[i] - arr[i - 1]) === 1;
}

function join(arr) {
  const m = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * 10 ** (m - 1 - i);
  }
  return sum;
}

function createArray(num) {
  const str = num + '';
  const m = str.length;
  const arr = new Array(m).fill(0);
  return arr;
}
