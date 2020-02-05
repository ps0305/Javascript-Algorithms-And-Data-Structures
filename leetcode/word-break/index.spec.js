import fn from './index';

test('word-break', () => {
  expect(fn('dogs', ['dog', 's', 'gs'])).toEqual(true);
});

test('word-break', () => {
  expect(fn('leetcode', ['leet', 'code'])).toEqual(true);
});

test('word-break', () => {
  expect(fn('ab', ['a', 'b'])).toEqual(true);
});

test('word-break', () => {
  expect(fn('applepenapple', ['apple', 'pen'])).toEqual(true);
});
