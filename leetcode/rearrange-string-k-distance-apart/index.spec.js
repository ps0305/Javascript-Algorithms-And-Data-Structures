import rearrangeString from './index';

test('rearrangeString', () => {
  const result = rearrangeString('aabbcc', 3);
  expect(result).toEqual('abcabc');
});

test('rearrangeString', () => {
  const result = rearrangeString('aaabc', 3);
  expect(result).toEqual('');
});

test('rearrangeString', () => {
  const result = rearrangeString('aaadbbcc', 2);
  expect(result).toEqual('abacadbc');
});

test('rearrangeString', () => {
  const result = rearrangeString('a', 0);
  expect(result).toEqual('a');
});
