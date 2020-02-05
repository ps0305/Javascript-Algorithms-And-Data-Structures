const Node = function() {
  this.words = {};
  this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new Node();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let ptr = this.root;
  for (const c of word) {
    if (!(c in ptr.words)) {
      ptr.words[c] = new Node();
    }
    ptr = ptr.words[c];
  }
  ptr.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, ptr = this.root, i = 0) {
  if (i >= word.length) {
    return ptr.isEnd;
  }
  if (word[i] in ptr.words) {
    return this.search(word, ptr.words[word[i]], i + 1);
  }
  if (word[i] === '.') {
    for (const w in ptr.words) {
      if (this.search(word, ptr.words[w], i + 1)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
