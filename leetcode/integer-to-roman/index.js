/**
 * @param {number} num
 * @return {string}
 */
const map = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

var intToRoman = function(num) {
  let n = num;
  let output = '';
  for (let i = 0; i < map.length; i++) {
    while (n >= map[i][1]) {
      n -= map[i][1];
      output += map[i][0];
    }
  }
  return output;
};
