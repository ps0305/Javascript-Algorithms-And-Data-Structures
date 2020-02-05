function bfs(root) {
  const props = ['start', 'end', 'val', 'lazy', 'total'];
  let queue = [root];
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      console.log(props.reduce((arr, p) => [...arr, p, node[p]], []).join(' '));
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    queue = next;
    console.log('--');
  }
  console.log('----');
}
