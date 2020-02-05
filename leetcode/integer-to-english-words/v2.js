/**
 * @param {number} num
 * @return {string}
 */

const map = {
  0: 'Zero',
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

const transformHundred = (num) => {
  const output = [];
  let n = num;

  if (Math.floor(n / 100) > 0) {
    output.push(map[Math.floor(n / 100)], 'Hundred');
  }
  n = n % 100;

  if (map[n]) {
    if (n > 0) {
      output.push(map[n]);
    }
  } else {
    if (Math.floor(n / 10) > 0) {
      output.push(map[Math.floor(n / 10) * 10]);
    }
    n = n % 10;
    if (n > 0) {
      output.push(map[n]);
    }
  }

  return output.join(' ');
};

var numberToWords = function(num) {
  if (num === 0) {
    return map[num];
  }

  const output = [];
  let n = num;

  if (Math.floor(n / 10 ** 9) > 0) {
    output.push(transformHundred(Math.floor(n / 10 ** 9)), 'Billion');
  }
  n = n % 10 ** 9;

  if (Math.floor(n / 10 ** 6) > 0) {
    output.push(transformHundred(Math.floor(n / 10 ** 6)), 'Million');
  }
  n = n % 10 ** 6;

  if (Math.floor(n / 10 ** 3) > 0) {
    output.push(transformHundred(Math.floor(n / 10 ** 3)), 'Thousand');
  }
  n = n % 10 ** 3;

  if (n > 0) {
    output.push(transformHundred(n));
  }

  return output.join(' ');
};
