/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const stack = [];
  for (let i = 0; i < code.length; i++) {
    if (i > 0 && !stack.length) {
      return false;
    }
    if (code.startsWith('<![CDATA[', i)) {
      const end = code.indexOf(']]>', i);
      if (end < 0) {
        return false;
      }
      i = end + 2;
    } else if (code.startsWith('</', i)) {
      const end = code.indexOf('>', i);
      const tagName = code.substring(i + 2, end);
      if (!validateTagName(tagName)) {
        return false;
      }
      if (!stack.length || stack.pop() !== tagName) {
        return false;
      }
      i = end;
    } else if (code.startsWith('<', i)) {
      const end = code.indexOf('>', i);
      const tagName = code.substring(i + 1, end);
      if (!validateTagName(tagName)) {
        return false;
      }
      stack.push(tagName);
      i = end;
    }
  }
  return stack.length === 0;
};

function validateTagName(name) {
  return /^[A-Z]+$/.test(name) && name.length >= 1 && name.length <= 9;
}
