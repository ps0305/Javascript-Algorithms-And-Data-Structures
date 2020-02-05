/**
 * @param {string} time
 * @return {string}
 */

const isValid = (selected) => {
  if (selected[0] > 2) {
    return false;
  }
  if (selected[0] === 2 && selected[1] > 4) {
    return false;
  }
  if (selected[2] > 5) {
    return false;
  }
  return true;
};

const toTimestamp = (time) => {
  if (!time) {
    return Infinity;
  }
  return (time[0] * 10 + time[1]) * 60 + time[2] * 10 + time[3];
};

const diff = (t1, t2) => {
  const delta = t1 - t2;
  return delta > 0 ? delta : delta + 24 * 60;
};

const dfs = (digits, selected = [], result = null) => {
  if (selected.length >= 4) {
    const t0 = toTimestamp(digits);
    const tr = toTimestamp(result);
    const ts = toTimestamp(selected);
    return diff(ts, t0) < diff(tr, t0) ? [...selected] : result;
  }
  if (!isValid(selected)) {
    return result;
  }
  for (let i = 0; i < digits.length; i++) {
    selected.push(digits[i]);
    result = dfs(digits, selected, result);
    selected.pop();
  }
  return result;
};

var nextClosestTime = function(time) {
  const digits = time
    .split('')
    .filter((c) => c !== ':')
    .map((c) => parseInt(c));
  const [h1, h2, m1, m2] = dfs(digits);
  return `${h1}${h2}:${m1}${m2}`;
};
