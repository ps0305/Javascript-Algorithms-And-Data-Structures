/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const nAgrams = createNAgram(p);
  const output = [];
  for (let i = 0; i < s.length; i++) {
    const str = s.substring(i, i + p.length);
    if (nAgrams.has(str)) {
      output.push(i);
    }
  }
  return output;
};

const createNAgram = (s, selected = new Set(), output = new Set()) => {
  if (selected.size >= s.length) {
    output.add([...selected].map((i) => s[i]).join(''));
    return output;
  }
  for (let i = 0; i < s.length; i++) {
    if (selected.has(i)) continue;
    selected.add(i);
    createNAgram(s, selected, output);
    selected.delete(i);
  }
  return output;
};
