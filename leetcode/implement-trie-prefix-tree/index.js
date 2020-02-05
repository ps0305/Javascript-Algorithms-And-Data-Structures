class Node {
  constructor() {
    this.chars = {};
    this.isEnd = false;
  }
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new Node();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let ptr = this.root;
  for (const c of word) {
    if (!(c in ptr.chars)) {
      ptr.chars[c] = new Node();
    }
    ptr = ptr.chars[c];
  }
  ptr.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let ptr = this.root;
  for (const c of word) {
    if (!(c in ptr.chars)) {
      return false;
    }
    ptr = ptr.chars[c];
  }
  return ptr.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let ptr = this.root;
  for (const c of prefix) {
    if (!(c in ptr.chars)) {
      return false;
    }
    ptr = ptr.chars[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
