/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
  this.trie = new Trie();
  this.topK = 3;
  this.freq = {};
  for (let i = 0; i < sentences.length; i++) {
    this.freq[sentences[i]] = times[i];
    this.trie.add(sentences[i]);
  }
  this.inputText = '';
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
  if (c === '#') {
    this.freq[this.inputText] = (this.freq[this.inputText] || 0) + 1;
    this.trie.add(this.inputText);
    this.inputText = '';
    return [];
  }
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      if (this.freq[a] !== this.freq[b]) {
        return this.freq[a] <= this.freq[b];
      }
      return a > b;
    },
  });
  this.inputText += c;
  const strs = this.trie.dfs(this.inputText);
  for (const str of strs) {
    pq.enqueue(str);
    if (pq.length > this.topK) {
      pq.dequeue();
    }
  }
  return [...pq].reverse();
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
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

  dfs(prefix, root = this.root, selected = '', output = []) {
    if (root.isEnd && selected.length >= prefix.length) {
      output.push(selected);
    }
    for (const key in root.chars) {
      const str = selected + key;
      if (prefix.startsWith(str) || selected.length >= prefix.length) {
        this.dfs(prefix, root.chars[key], str, output);
      }
    }
    return output;
  }

  add(str) {
    let ptr = this.root;
    for (const c of str) {
      if (!(c in ptr.chars)) {
        ptr.chars[c] = new Node();
      }
      ptr = ptr.chars[c];
    }
    ptr.isEnd = true;
  }
}

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    this.arr.push(val);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  get length() {
    return this.arr.length;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        return {
          done: !this.arr.length,
          value: this.dequeue(),
        };
      },
    };
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
}
