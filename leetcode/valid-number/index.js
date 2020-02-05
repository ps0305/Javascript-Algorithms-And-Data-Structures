/**
 * @param {string} s
 * @return {boolean}
 */

const isNum = (c) => {
  return /[0-9]/.test(c);
};

const isSign = (c) => {
  return /[-|+]/.test(c);
};

const isSpace = (c) => {
  return c === ' ';
};

const isDot = (c) => {
  return c === '.';
};

const isExp = (c) => {
  return c === 'e';
};

var isNumber = function(s) {
  const nums = [];
  const signs = [];
  const dots = [];
  const exps = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isNum(c)) {
      nums.push(c);
    } else if (isSign(c)) {
      if (signs.length > 0) {
        return false;
      }
      if (nums.length > 0 || dots.length > 0) {
        return false;
      }
      signs.push(c);
    } else if (isSpace(c)) {
      if (!nums.length && !signs.length && !dots.length && !exps.length) {
        continue;
      }
      if (!/^[ ]+$/.test(s.slice(i))) {
        return false;
      }
      break;
    } else if (isDot(c)) {
      if (exps.length > 0) {
        return false;
      }
      if (dots.length > 0) {
        return false;
      }
      dots.push(c);
    } else if (isExp(c)) {
      if (!nums.length) {
        return false;
      }
      if (exps.length > 0) {
        return false;
      }
      return /^[+|-]*\d+[ ]*$/.test(s.slice(i + 1));
    } else {
      return false;
    }
  }
  if (!nums.length) {
    return false;
  }
  return true;
};
