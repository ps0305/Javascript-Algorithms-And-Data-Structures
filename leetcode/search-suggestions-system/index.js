/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  const m = 3;
  const output = [];
  for (let i = 0; i < searchWord.length; i++) {
    const prefix = searchWord.substring(0, i + 1);
    const index = lowerBound(products, prefix);
    const arr = products.slice(index, index + m).filter((str) => str.startsWith(prefix));
    output.push(arr);
  }
  return output;
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
