import fn from './index';

test('top-k-frequent-elements', () => {
  const data = [[1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 2];
  const result = fn(...data);
  const expectedResult = [5, 4];
  expect(result).toEqual(expectedResult);
});

test('top-k-frequent-elements', () => {
  const data = [[-1, -1], 1];
  const result = fn(...data);
  const expectedResult = [-1];
  expect(result).toEqual(expectedResult);
});
