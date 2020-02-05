import fn from './index';

test('largest-divisible-subset', () => {
  expect(fn([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([8, 4, 2, 1]);
});

test('largest-divisible-subset', () => {
  expect(fn([1])).toEqual([1]);
});

test('largest-divisible-subset', () => {
  expect(fn([1, 2])).toEqual([2, 1]);
});

test('largest-divisible-subset', () => {
  expect(fn([123, 456])).toEqual([123]);
});

test('largest-divisible-subset', () => {
  expect(fn([3, 4, 16, 8])).toEqual([16, 8, 4]);
});
