//chris

// function preTrav(node) {
//   var treeOut =
// }

var tree = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: null
  }
};

//dustin
function PreTrav(node) {
  while(node != null) {
    console.log(node.val);
    PreTrav(node.left);
    PreTrav(node.right);
  }
}

function preOrderTrav(root) {
  var queue = [], children = [];

  if (root !== '') {
    queue.push(root);

    while (queue.length !== 0) {
      // console.log('queue', queue, 'children', children);
      root = queue.shift();
      children.push(root.val);

      if (root.left !== null) {
        queue.push(root.left);
      }
      if (root.right !== null) {
        queue.push(root.right);
      }
    }
  }

  console.log(children.join(' '));
}

console.log(preOrderTrav(tree));
