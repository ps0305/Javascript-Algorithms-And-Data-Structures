import fn from './index';

test('longest-substring-without-repeating-characters', () => {
  expect(fn('tmmzux')).toEqual(4);
});

test('longest-substring-without-repeating-characters', () => {
  expect(fn('pwwkew')).toEqual(3);
});

test('longest-substring-without-repeating-characters', () => {
  expect(fn('abcabcbb')).toEqual(3);
});

test('longest-substring-without-repeating-characters', () => {
  expect(fn('bbbbb')).toEqual(1);
});

test('longest-substring-without-repeating-characters', () => {
  expect(fn('')).toEqual(0);
});
