/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (isIPV4(IP)) {
    return 'IPv4';
  }
  if (isIPV6(IP)) {
    return 'IPv6';
  }
  return 'Neither';
};

function isIPV4(IP) {
  const strs = IP.split('.');
  if (strs.length !== 4) {
    return false;
  }
  for (const str of strs) {
    if (!(str.length >= 1 && str.length <= 3)) {
      return false;
    }
    if (str.length >= 2 && str[0] === '0') {
      return false;
    }
    if (!/^[0-9]+$/.test(str)) {
      return false;
    }
  }
  const nums = strs.map((str) => parseInt(str));
  for (const num of nums) {
    if (!(num >= 0 && num <= 255)) {
      return false;
    }
  }
  return true;
}

function isIPV6(IP) {
  const strs = IP.split(':');
  if (strs.length !== 8) {
    return false;
  }
  for (const str of strs) {
    if (!(str.length >= 1 && str.length <= 4)) {
      return false;
    }
    if (!/^[0-9a-fA-F]+$/.test(str)) {
      return false;
    }
  }
  const nums = strs.map((str) => parseInt(str, 16));
  for (const num of nums) {
    if (!(num >= 0 && num <= 2 ** 16)) {
      return false;
    }
  }
  return true;
}
