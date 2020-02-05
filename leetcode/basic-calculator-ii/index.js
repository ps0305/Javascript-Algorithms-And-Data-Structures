/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let op;
  let num;
  for (const token of split(removeSpaces(s))) {
    if (isOperator(token)) {
      op = token;
    } else {
      num = token;
      if (op === '+') {
        stack.push(num);
      } else if (op === '-') {
        stack.push(-num);
      } else if (op === '*') {
        stack.push(stack.pop() * num);
      } else if (op === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      } else {
        stack.push(num);
      }
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};

function split(s) {
  let i = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (i >= s.length) {
        return {
          done: true,
        };
      }
      if (isOperator(s[i])) {
        return {
          value: s[i++],
          done: false,
        };
      }
      let num = 0;
      while (/[0-9]/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i += 1;
      }
      return {
        value: num,
        done: false,
      };
    },
  };
}

function removeSpaces(s) {
  return s.replace(/ /g, '');
}

function isOperator(c) {
  return c === '+' || c === '-' || c === '*' || c === '/';
}
