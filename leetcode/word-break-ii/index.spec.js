import fn from './index';

test('word-break-ii', () => {
  expect(fn('aaaaaaa', ['aaa', 'aaaa'])).toEqual(['aaaa aaa', 'aaa aaaa']);
});

test('word-break-ii', () => {
  expect(fn('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple'])).toEqual([
    'pine apple pen apple',
    'pineapple pen apple',
    'pine applepen apple',
  ]);
});
