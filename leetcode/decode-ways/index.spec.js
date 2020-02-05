import fn from './index';

test('decode-ways', () => {
  expect(fn('101019')).toEqual(2);
});

test('decode-ways', () => {
  expect(fn('226')).toEqual(3);
});

test('decode-ways', () => {
  expect(fn('0')).toEqual(0);
});

test('decode-ways', () => {
  expect(fn('1')).toEqual(1);
});

test('decode-ways', () => {
  expect(fn('00')).toEqual(0);
});

test('decode-ways', () => {
  expect(fn('000')).toEqual(0);
});

test('decode-ways', () => {
  expect(fn('001')).toEqual(0);
});

test('decode-ways', () => {
  expect(fn('101001')).toEqual(0);
});
