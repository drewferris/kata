var q = [],
  children = [];

if (root !== "") {
  q.push(root);

  while (q.length !== 0) {
    root = q.shift();
    children.push(root.data);

    if (root.left !== null) {
      q.push(root.left);
    }

    if (root.right !== null) {
      q.push(root.right);
    }
  }
}

console.log(children.join(' '));
