import fn from './index';

test('sqrtx', () => {
  expect(fn(10)).toEqual(3);
});

test('sqrtx', () => {
  expect(fn(9)).toEqual(3);
});

test('sqrtx', () => {
  expect(fn(8)).toEqual(2);
});
