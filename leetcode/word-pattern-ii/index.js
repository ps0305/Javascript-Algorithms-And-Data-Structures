/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str, i = 0, j = 0, selected = new Selected()) {
  if (i >= pattern.length || j >= str.length) {
    return i === pattern.length && j === str.length;
  }
  const p = pattern[i];
  if (selected.get(p)) {
    const length = selected.get(p).length;
    if (str.substring(j, j + length) !== selected.get(p)) {
      return false;
    }
    return wordPatternMatch(pattern, str, i + 1, j + length, selected);
  }
  for (let length = 1; length <= str.length; length++) {
    const substring = str.substring(j, j + length);
    if (selected.hasValue(substring)) {
      continue;
    }
    selected.set(p, substring);
    if (wordPatternMatch(pattern, str, i + 1, j + length, selected)) {
      return true;
    }
    selected.delete(p);
  }
  return false;
};

class Selected {
  constructor() {
    this.map = {};
    this.values = new Set();
  }

  get(key) {
    return this.map[key];
  }

  set(key, value) {
    this.values.add(value);
    this.map[key] = value;
  }

  delete(key) {
    this.values.delete(this.map[key]);
    delete this.map[key];
  }

  hasValue(value) {
    return this.values.has(value);
  }
}
