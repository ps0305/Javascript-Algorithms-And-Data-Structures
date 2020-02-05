/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  const trie = new Trie();
  for (const word of dict) {
    trie.add(word);
  }
  return sentence
    .split(' ')
    .map((word) => trie.search(word))
    .join(' ');
};

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
    ptr.isEndOfWord = true;
  }

  search(word) {
    let ptr = this.root;
    for (let i = 0; i < word.length && ptr; i++) {
      if (ptr.isEndOfWord) {
        return word.substring(0, i);
      }
      ptr = ptr.chars[word[i]];
    }
    return word;
  }
}

class Node {
  constructor() {
    this.chars = {};
    this.isEndOfWord = false;
  }
}
