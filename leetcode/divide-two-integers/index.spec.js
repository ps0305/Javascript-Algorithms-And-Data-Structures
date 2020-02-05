import fn from './index';

test('divide-two-integers', () => {
  expect(fn(-2147483648, 2)).toEqual(-1073741824);
});

test('divide-two-integers', () => {
  expect(fn(-2147483648, -1)).toEqual(2147483647);
});

test('divide-two-integers', () => {
  expect(fn(-2147483648, 1)).toEqual(-2147483648);
});

test('divide-two-integers', () => {
  expect(fn(30, 5)).toEqual(6);
});

test('divide-two-integers', () => {
  expect(fn(10, 3)).toEqual(3);
});
