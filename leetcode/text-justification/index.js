/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  return split(words, maxWidth).map((row, i, arr) => {
    if (i >= arr.length - 1) {
      return leftJustify(row, maxWidth);
    }
    return centerJustify(row, maxWidth);
  });
};

function split(words, maxWidth) {
  const output = [];
  let start = 0;
  let nChars = 0;
  for (let i = 0; i < words.length; i++) {
    const rowLength = nChars + words[i].length + i - start;
    if (rowLength > maxWidth) {
      output.push(words.slice(start, i));
      start = i;
      nChars = 0;
    }
    nChars += words[i].length;
  }
  if (start < words.length) {
    output.push(words.slice(start));
  }
  return output;
}

function centerJustify(row, maxWidth) {
  const nChars = row.reduce((acc, cur) => acc + cur.length, 0);
  const nTotalSpaces = Math.max(1, row.length - 1);
  const spaceLength = Math.floor((maxWidth - nChars) / nTotalSpaces);
  const nExtraSpaces = (maxWidth - nChars) % nTotalSpaces;
  const nSpaces = nTotalSpaces - nExtraSpaces;
  let output = row[0];
  let i = 1;
  for (let j = 0; j < nExtraSpaces; j++) {
    output += ' '.repeat(spaceLength + 1) + (row[i] || '');
    i += 1;
  }
  for (let j = 0; j < nSpaces; j++) {
    output += ' '.repeat(spaceLength) + (row[i] || '');
    i += 1;
  }
  return output;
}

function leftJustify(row, maxWidth) {
  const nChars = row.reduce((acc, cur) => acc + cur.length, 0);
  const nTotalSpaces = row.length - 1;
  const nSpaces = maxWidth - (nChars + nTotalSpaces);
  return row.join(' ') + ' '.repeat(nSpaces);
}
