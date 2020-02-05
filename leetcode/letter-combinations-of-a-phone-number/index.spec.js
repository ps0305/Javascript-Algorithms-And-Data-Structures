import fn from './index';

test('letter-combinations-of-a-phone-number', () => {
  console.log(fn('23'));
  expect(fn('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});
