/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    
    let sCharCount = {};
    
    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        sCharCount[sChar] = sCharCount[sChar] + 1 || 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        if ( !sCharCount[tChar] ) {
            return false
        } else {
            sCharCount[tChar]--
        }
    }
    
    return true;
};

// ================================================================================================================================================================

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const freq = createFreq(t);
  for (const c of s) {
    freq[c] = (freq[c] || 0) - 1;
    if (freq[c] < 0) {
      return false;
    }
  }
  for (const c in freq) {
    if (freq[c] > 0) {
      return false;
    }
  }
  return true;
};

function createFreq(str) {
  const freq = {};
  for (const c of str) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
