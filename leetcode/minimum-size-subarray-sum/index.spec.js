import fn from './index';

test('minimum-size-subarray-sum', () => {
  expect(fn(10, [2, 2, 2, 10, 2, 2, 6, 4, 10])).toEqual(1);
});
