import fn from './index';

test('binary-search [-1, 0, 3, 5, 9, 12], 9', () => {
  expect(fn([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
});

test('binary-search [-1, 0, 3, 5, 9, 12], 2', () => {
  expect(fn([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
});
