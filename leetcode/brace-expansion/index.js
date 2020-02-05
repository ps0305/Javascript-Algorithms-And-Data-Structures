/**
 * @param {string} S
 * @return {string[]}
 */
var expand = function(S) {
  const arr = createArray(S);
  return helper(arr);
};

function helper(arr, index = 0, selected = '', output = []) {
  if (index >= arr.length) {
    output.push(selected);
    return output;
  }
  for (const val of arr[index]) {
    helper(arr, index + 1, selected + val, output);
  }
  return output;
}

function createArray(S) {
  const arr = [];
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '{' || S[i] === '}') {
      if (i > start) {
        arr.push(S.substring(start, i));
      }
      start = i + 1;
    }
  }
  if (start < S.length) {
    arr.push(S.substring(start));
  }
  return arr.map((str) => str.split(',').sort());
}
