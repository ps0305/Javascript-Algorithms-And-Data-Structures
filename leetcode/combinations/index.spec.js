import fn from './index';

test('combinations', () => {
  const result = [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]];
  expect(fn(5, 2)).toEqual(result);
});

test('combinations', () => {
  const result = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
  expect(fn(4, 2)).toEqual(result);
});
