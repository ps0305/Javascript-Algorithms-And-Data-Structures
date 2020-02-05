import fn from './index';

test('multiply-strings', () => {
  expect(fn('111111', '11')).toEqual('1222221');
});

test('multiply-strings', () => {
  expect(fn('111111', '0')).toEqual('0');
});

test('multiply-strings', () => {
  expect(fn('999999999', '999999999')).toEqual('999999998000000001');
});
