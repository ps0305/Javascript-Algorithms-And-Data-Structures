/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const names = {};
  const set = new DisjointSet({ accounts });
  for (const account of accounts) {
    const [, ...emails] = account;
    for (const email of emails) {
      set.roots[email] = email;
    }
  }
  for (const account of accounts) {
    const [name, ...emails] = account;
    for (let i = 0; i <= emails.length - 2; i++) {
      set.union(emails[i], emails[i + 1]);
    }
    for (const email of emails) {
      names[email] = name;
    }
  }
  const output = [];
  const group = set.toGroup();
  for (const key in group) {
    output.push([names[key], ...group[key].sort()]);
  }
  return output;
};

class DisjointSet {
  constructor({ accounts }) {
    this.roots = {};
  }

  find(root) {
    if (!(root in this.roots)) this.roots[root] = root;
    let ptr = root;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    this.roots[r2] = r1;
  }

  toGroup() {
    const group = {};
    for (const key in this.roots) {
      const root = this.find(key);
      if (!(root in group)) group[root] = [];
      group[root].push(key);
    }
    return group;
  }
}
