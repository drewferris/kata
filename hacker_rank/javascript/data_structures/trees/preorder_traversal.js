function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

};


var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
bst.push(6);

var tree = {
  value: 3,
  left:
   { value: 5,
     left: { value: 1, left: null, right: null },
     right: {value: 4, left: null, right: null} },
  right:
   { value: 2,
     left: {value: 6, left: null, right: null},
     right: null }
};

function preOrderTrav(root) {
  console.log(root.value);
  if(root.left !== null) {
    preOrderTrav(root.left);
  }
  if(root.right !== null) {
    preOrderTrav(root.right);
  }
}

preOrderTrav(tree);

debugger;
