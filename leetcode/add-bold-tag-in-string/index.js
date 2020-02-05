/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function(s, dict) {
  const occurrences = merge(findOccurrences(s, dict));
  let output = '';
  let pre = 0;
  for (const [start, end] of occurrences) {
    output += s.substring(pre, start) + '<b>' + s.substring(start, end) + '</b>';
    pre = end;
  }
  output += s.substring(pre);
  return output;
};

function findOccurrences(s, dict) {
  const output = [];
  for (const word of dict) {
    let index = 0;
    while ((index = s.indexOf(word, index)) > -1) {
      output.push([index, index + word.length]);
      index += 1;
    }
  }
  return output;
}

function merge(ranges) {
  if (!ranges.length) {
    return [];
  }
  ranges.sort((a, b) => a[0] - b[0]);
  const output = [];
  let ptr = [...ranges[0]];
  for (let j = 1; j < ranges.length; j++) {
    const shouldMerge = ptr[1] >= ranges[j][0];
    if (shouldMerge) {
      ptr[0] = Math.min(ptr[0], ranges[j][0]);
      ptr[1] = Math.max(ptr[1], ranges[j][1]);
    } else {
      output.push(ptr);
      ptr = [...ranges[j]];
    }
  }
  output.push(ptr);
  return output;
}
