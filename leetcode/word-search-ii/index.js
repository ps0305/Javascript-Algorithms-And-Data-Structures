/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (!board.length || !board[0].length) {
    return [];
  }
  const trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }
  const m = board.length;
  const n = board[0].length;
  const output = new Set();
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (trie.startsWith(board[i][j])) {
        dfs(board, m, n, trie, board[i][j], [i, j], output, visited);
      }
    }
  }
  return [...output];
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(board, m, n, trie, selected, [x, y], output, visited) {
  if (trie.search(selected)) {
    output.add(selected);
  }
  visited[x][y] = true;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n) && !visited[i][j] && trie.startsWith(selected + board[i][j])) {
      dfs(board, m, n, trie, selected + board[i][j], [i, j], output, visited);
    }
  }
  visited[x][y] = false;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

class Node {
  constructor() {
    this.chars = {};
    this.isWord = false;
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
    ptr.isWord = true;
  }

  startsWith(str) {
    let ptr = this.root;
    for (const c of str) {
      if (!(c in ptr.chars)) {
        return false;
      }
      ptr = ptr.chars[c];
    }
    return true;
  }

  search(word) {
    let ptr = this.root;
    for (const c of word) {
      if (!(c in ptr.chars)) {
        return false;
      }
      ptr = ptr.chars[c];
    }
    return ptr.isWord;
  }
}
