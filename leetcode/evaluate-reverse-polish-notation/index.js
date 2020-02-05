/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (isOperator(token)) {
      const result = compute(stack, token);
      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};

function isOperator(token) {
  return token === '+' || token === '-' || token === '*' || token === '/';
}

function compute(stack, token) {
  const num2 = stack.pop();
  const num1 = stack.pop();
  if (token === '+') {
    return num1 + num2;
  } else if (token === '-') {
    return num1 - num2;
  } else if (token === '*') {
    return num1 * num2;
  } else if (token === '/') {
    return num1 / num2 > 0 ? Math.floor(num1 / num2) : -Math.floor(Math.abs(num1 / num2));
  }
}
