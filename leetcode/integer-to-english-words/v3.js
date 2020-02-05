/**
 * @param {number} num
 * @return {string}
 */

const map = {
  0: '',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};

const thousands = ['', ' Thousand ', ' Million ', ' Billion '];

const separator = ' ';

const helper = (num) => {
  let result = '';
  if (num < 20) {
    result = map[num];
  } else if (num < 100) {
    result = map[Math.floor(num / 10) * 10] + separator + map[num % 10];
  } else {
    result = map[Math.floor(num / 100)] + separator + 'Hundred' + separator + helper(num % 100);
  }
  return result.trim();
};

var numberToWords = function(num) {
  if (!num) {
    return 'Zero';
  }
  let n = num;
  let output = '';
  for (let i = 0; i < thousands.length; i++) {
    const r = n % 10 ** 3;
    if (r > 0) {
      output = helper(r) + thousands[i] + output;
    }
    n = Math.floor(n / 10 ** 3);
  }
  return output.trim();
};
