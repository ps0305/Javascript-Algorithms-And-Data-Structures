import fn from './index';

test('number-of-islands', () => {
  const data = require('./data1.json');
  const result = 1;
  expect(fn(data)).toEqual(result);
});

test('number-of-islands', () => {
  const data = require('./data2.json');
  const result = 1;
  expect(fn(data)).toEqual(result);
});

test('number-of-islands', () => {
  const data = require('./data3.json');
  const result = 2;
  expect(fn(data)).toEqual(result);
});
