/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const freq = createFreq(s);
  if (!validateOddChars(freq)) {
    return [];
  }
  const odd = findOddChar(freq);
  freq[odd] -= 1;
  const arr = createArr(freq);
  const combinations = createCombinations(arr);
  return combinations.map((str) => {
    return str + odd + reverse(str);
  });
};

function reverse(str) {
  let output = '';
  for (const c of str) {
    output = c + output;
  }
  return output;
}

function createCombinations(arr, selected = '', visited = new Set(), output = []) {
  if (selected.length >= arr.length) {
    output.push(selected);
    return output;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === arr[i] && !visited.has(i - 1)) {
      continue;
    }
    if (!visited.has(i)) {
      visited.add(i);
      createCombinations(arr, selected + arr[i], visited, output);
      visited.delete(i);
    }
  }
  return output;
}

function createArr(freq) {
  const arr = [];
  for (const c in freq) {
    if (freq[c] % 2 === 1 || freq[c] === 0) continue;
    for (let i = 0; i < freq[c] / 2; i++) {
      arr.push(c);
    }
  }
  return arr;
}

function findOddChar(freq) {
  for (const c in freq) {
    if (freq[c] % 2 === 1) {
      return c;
    }
  }
  return '';
}

function validateOddChars(freq) {
  let count = 0;
  for (const c in freq) {
    if (freq[c] % 2 === 1) {
      count += 1;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}

function createFreq(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
