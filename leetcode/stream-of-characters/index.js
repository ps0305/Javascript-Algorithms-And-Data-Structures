/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.trie = new Trie();
  for (const word of words) {
    this.trie.add(reverse(word));
  }
  this.input = '';
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.input += letter;
  return this.trie.search(this.input);
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

class Node {
  constructor() {
    this.chars = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(word) {
    let ptr = this.root;
    for (const c of word) {
      if (!(c in ptr.chars)) {
        ptr.chars[c] = new Node();
      }
      ptr = ptr.chars[c];
    }
    ptr.isEnd = true;
  }

  search(str) {
    let i = str.length - 1;
    let ptr = this.root;
    while (str[i] in ptr.chars && i >= 0) {
      if (ptr.isEnd) {
        return true;
      }
      ptr = ptr.chars[str[i]];
      i -= 1;
    }
    return ptr.isEnd;
  }
}

function reverse(str) {
  let output = '';
  for (const c of str) {
    output = c + output;
  }
  return output;
}
