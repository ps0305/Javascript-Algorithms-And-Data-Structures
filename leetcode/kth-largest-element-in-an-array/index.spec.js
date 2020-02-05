import fn from './index';

test('kth-largest-element-in-an-array', () => {
  const arr = [1, 2, 3, 8, 4, 9, 7, 5];
  const sortedArr = arr.slice().sort((a, b) => b - a);
  const k = 3;
  const result = fn(arr, 3);
  expect(result).toEqual(sortedArr[k - 1]);
});
