import fn from './index';

test('merge-sorted-array', () => {
  const arr = [0];
  fn(arr, 0, [1], 1);
  expect(arr).toEqual([1]);
});

test('merge-sorted-array', () => {
  const arr = [1, 3, 5, 0, 0, 0];
  fn(arr, 3, [2, 4, 6], 3);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
