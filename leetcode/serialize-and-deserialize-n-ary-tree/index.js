/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function(root) {
    if (!root) {
      return '';
    }
    const queue = [root];
    const output = [root.val];
    while (queue.length) {
      const node = queue.shift();
      for (const child of node.children) {
        output.push(child.val);
        queue.push(child);
      }
      output.push(null);
    }
    return JSON.stringify(output);
  };

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function(data) {
    if (!data) {
      return null;
    }
    const arr = JSON.parse(data);
    const root = new Node(arr.shift(), []);
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      while (arr[0] !== null) {
        const child = new Node(arr.shift(), []);
        node.children.push(child);
        queue.push(child);
      }
      arr.shift();
    }
    return root;
  };
}
// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
