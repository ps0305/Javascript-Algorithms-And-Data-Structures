import fn from './index';

test('valid-parentheses', () => {
  expect(fn('{[]}')).toEqual(true);
});

test('valid-parentheses', () => {
  expect(fn(')')).toEqual(false);
});

test('valid-parentheses', () => {
  expect(fn('{')).toEqual(false);
});

test('valid-parentheses', () => {
  expect(fn('(){}xxx{}')).toEqual(true);
});

test('valid-parentheses', () => {
  expect(fn('')).toEqual(true);
});
