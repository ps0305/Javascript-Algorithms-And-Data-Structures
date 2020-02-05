import fn from './index';

test('palindrome-permutation', () => {
  expect(fn('carerac')).toEqual(true);
});

test('palindrome-permutation', () => {
  expect(fn('aab')).toEqual(true);
});

test('palindrome-permutation', () => {
  expect(fn('code')).toEqual(false);
});
