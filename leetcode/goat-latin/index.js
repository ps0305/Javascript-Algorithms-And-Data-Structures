/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ')
    .filter((str) => str.length > 0)
    .map(mapper)
    .join(' ');
};

function mapper(str, i) {
  if (isVowel(str)) {
    return str + 'ma' + times('a', i + 1);
  }
  return str.substring(1) + str[0] + 'ma' + times('a', i + 1);
}

const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
function isVowel(str) {
  return vowel.has(str[0].toLowerCase());
}

function times(str, n) {
  let output = '';
  for (let i = 0; i < n; i++) {
    output += str;
  }
  return output;
}
