import fn from './index';

test('longest-palindrome', () => {
  expect(fn('ccc')).toEqual(3);
});

test('longest-palindrome', () => {
  expect(fn('abccccdd')).toEqual(7);
});
