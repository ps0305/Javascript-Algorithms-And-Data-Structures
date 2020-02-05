import fn from './index';

test('word-ladder', () => {
  expect(fn('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toEqual(5);
});

test('word-ladder', () => {
  expect(fn('a', 'c', ['a', 'b', 'c'])).toEqual(2);
});
