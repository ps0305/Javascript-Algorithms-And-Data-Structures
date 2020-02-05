/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const map = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const set = new Set();
  const base = 'a'.charCodeAt(0);
  for (const word of words) {
    const str = word
      .split('')
      .map((c) => map[c.charCodeAt(0) - base])
      .join('');
    set.add(str);
  }
  return set.size;
};
