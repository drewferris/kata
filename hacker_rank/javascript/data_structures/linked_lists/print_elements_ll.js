function LinkedList() {
  this._length = 0;
  this._head = null;
}

LinkedList.prototype = {
  add: function(data) {
    var node = {
        data: data,
        next: null
      },
      current;
    if (this._head === null) {
      this._head = node;
    } else {
      current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this._length++;
  }
};

function addToTail(ll, data) {
  var node = {
      data: data,
      next: null
    },
    current;
  if(ll._head === null) {
    ll._head = node;
  } else {
    current = ll._head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  ll._length++;
}

LinkedList.prototype.print = function() {
  if (this._head === null) {
    return;
  }
  var currentNode = this._head;
  while (currentNode.data !== null) {
    console.log(currentNode.data);
    if (currentNode.next !== null) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
};

function printLL(ll) {
  if (ll._head === null) {
    return;
  }
  var node = ll._head;
  while (node.data !== null) {
    console.log(node.data);
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

var list = new LinkedList();

list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.add('f');
// addToTail(list, 'g');


debugger;
