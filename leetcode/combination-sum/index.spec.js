import fn from './index';

test('combination-sum', () => {
  const data = [[2, 3, 6, 7], 7];
  const result = [[2, 2, 3], [7]];
  expect(fn(...data)).toEqual(result);
});
