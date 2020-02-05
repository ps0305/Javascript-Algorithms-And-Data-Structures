import fn from './index';

test('word-ladder-ii', () => {
  const data = ['a', 'c', ['a', 'b', 'c']];
  const result = [['a', 'c']];
  expect(fn(...data)).toEqual(result);
});

test('word-ladder-ii', () => {
  const data = ['red', 'tax', ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee']];
  const result = [
    ['red', 'ted', 'tex', 'tax'],
    ['red', 'ted', 'tad', 'tax'],
    ['red', 'rex', 'tex', 'tax'],
  ];
  expect(fn(...data)).toEqual(result);
});

test('word-ladder-ii', () => {
  const data = ['hot', 'dog', ['hot', 'cog', 'dog', 'tot', 'hog', 'hop', 'pot', 'dot']];
  const result = [['hot', 'hog', 'dog'], ['hot', 'dot', 'dog']];
  expect(fn(...data)).toEqual(result);
});
