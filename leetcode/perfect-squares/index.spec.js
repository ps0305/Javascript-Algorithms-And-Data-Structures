import fn from './index';

test('perfect-squares', () => {
  expect(fn(0)).toEqual(0);
});

test('perfect-squares', () => {
  expect(fn(12)).toEqual(3);
});

test('perfect-squares', () => {
  expect(fn(111)).toEqual(4);
});
