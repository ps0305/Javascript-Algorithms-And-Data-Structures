import fn from './index';

test('integer-to-english-words', () => {
  const data = 123;
  const result = 'One Hundred Twenty Three';
  expect(fn(data)).toEqual(result);
});

test('integer-to-english-words', () => {
  const data = 0;
  const result = 'Zero';
  expect(fn(data)).toEqual(result);
});

test('integer-to-english-words', () => {
  const data = 1234567891;
  const result =
    'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One';
  expect(fn(data)).toEqual(result);
});

test('integer-to-english-words', () => {
  const data = 19;
  const result = 'Nineteen';
  expect(fn(data)).toEqual(result);
});
