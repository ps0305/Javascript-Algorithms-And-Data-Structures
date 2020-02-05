import fn from './index';

test('product-of-array-except-self', () => {
  expect(fn([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});
