/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  const freqs = rejectDominated(createFreqs(stickers, target));
  const visited = new Visited(target);
  return createHelper(freqs, target, visited, 0);
};

function createHelper(...args) {
  let gMin = Infinity;
  const helper = (freqs, target, visited, nStickers, memo = {}) => {
    const key = createKey(visited, nStickers);
    if (key in memo) {
      return memo[key];
    }
    if (nStickers > gMin) {
      return nStickers;
    }
    if (visited.isAllMatched()) {
      gMin = Math.min(gMin, nStickers);
      return nStickers;
    }
    let min = Infinity;
    for (const freq of freqs) {
      const state = visited.save();
      let nTotalMatches = 0;
      for (const c in freq) {
        let nMatches = 0;
        for (let i = 0; i < target.length && nMatches < freq[c]; i++) {
          if (target[i] === c && !visited.has(i)) {
            visited.set(i);
            nMatches += 1;
          }
        }
        nTotalMatches += nMatches;
      }
      if (nTotalMatches) {
        const val = helper(freqs, target, visited, nStickers + 1, memo);
        min = Math.min(min, val);
      }
      visited.restore(state);
    }
    memo[key] = min;
    return min < Infinity ? min : -1;
  };
  return helper(...args);
}

function createKey(visited, nStickers) {
  return visited + ':' + nStickers;
}

function rejectDominated(freqs) {
  const output = [];
  for (let i = 0; i < freqs.length; i++) {
    let isRejected = false;
    for (let j = i + 1; j < freqs.length; j++) {
      if (isDominatedBy(freqs[i], freqs[j])) {
        isRejected = true;
        break;
      }
    }
    if (!isRejected) {
      output.push(freqs[i]);
    }
  }
  return output;
}

function isDominatedBy(freq1, freq2) {
  for (const c in freq1) {
    if (!(c in freq2) || freq1[c] > freq2[c]) {
      return false;
    }
  }
  return true;
}

function createFreqs(stickers, target) {
  const set = new Set(target);
  const output = [];
  for (const sticker of stickers) {
    const freq = {};
    for (const c of sticker) {
      if (set.has(c)) {
        freq[c] = (freq[c] || 0) + 1;
      }
    }
    output.push(freq);
  }
  return output;
}

class Visited {
  constructor(target) {
    this.n = 0;
    this.target = target;
  }

  isAllMatched() {
    return this.n === 2 ** this.target.length - 1;
  }

  has(i) {
    return ((this.n >> i) & 1) === 1;
  }

  set(i) {
    const mask = 2 ** i;
    this.n = this.n | mask;
  }

  toString() {
    return this.n;
  }

  save() {
    return this.n;
  }

  restore(n) {
    this.n = n;
  }
}
