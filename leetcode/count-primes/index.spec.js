import fn from './index';

test('count-primes', () => {
  expect(fn(100)).toEqual(25);
});

test('count-primes', () => {
  expect(fn(1)).toEqual(0);
});
