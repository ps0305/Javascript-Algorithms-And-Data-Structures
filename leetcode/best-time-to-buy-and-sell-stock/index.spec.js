import fn from './index';

test('best-time-to-buy-and-sell-stock', () => {
  expect(fn([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test('best-time-to-buy-and-sell-stock', () => {
  expect(fn([7, 6, 4, 3, 1])).toEqual(0);
});
