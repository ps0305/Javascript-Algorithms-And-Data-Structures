/**
 * @param {number[]} preorder
 * @return {boolean}
 */

const getRightIndex = (arr, root, start, end) => {
  for (let i = start; i <= end; i++) {
    if (arr[i] > root) {
      return i;
    }
  }
  return end + 1;
};

var verifyPreorder = function(
  preorder,
  start = 0,
  end = preorder.length - 1,
  min = -Infinity,
  max = Infinity,
) {
  if (start > end) {
    return true;
  }
  const root = preorder[start];
  if (root < min || root > max) {
    return false;
  }
  const right = getRightIndex(preorder, root, start, end);
  return (
    verifyPreorder(preorder, start + 1, right - 1, min, root) &&
    verifyPreorder(preorder, right, end, root, max)
  );
};
