/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const counts = {};
  for (const pair of cpdomains) {
    const splitStr = pair.split(' ');
    splitStr[0] = parseInt(splitStr[0]);
    const [count, str] = splitStr;
    const subdomains = str.split('.');
    const n = subdomains.length;
    for (let i = 0; i < n; i++) {
      const subdomain = subdomains.slice(i, n).join('.');
      counts[subdomain] = (counts[subdomain] || 0) + count;
    }
  }
  return Object.entries(counts).map(([subdomain, count]) => `${count} ${subdomain}`);
};
