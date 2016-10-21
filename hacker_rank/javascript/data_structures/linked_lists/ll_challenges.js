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
  return ll;
}

function insertToHead(ll, data) {
  if(ll._head === null) {
    ll._head = {
      data: data,
      next: null
    };
  } else {
    ll._head = {
      data: data,
      next: ll._head
    };
  }
  return ll;
}

LinkedList.prototype.insertToHead = function (data) {
  if(this._head === null) {
    this._head = {
      data: data,
      next: null
    };
  } else {
    this._head = {
      data: data,
      next: this._head
    };
  }
};

function insertNode(ll, data, position) {
  var count = 0;
  var node = ll._head;
  while(node.data !== null) {
    count++;
    if(count === position - 1) {
      node.next = {
        data: data,
        next: node.next
      };
    }
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

LinkedList.prototype.insertNode = function (data, position) {
  var count = 0;
  var node = this._head;
  while(node.data !== null) {
    count++;
    if(count === position - 1) {
      node.next = {
        data: data,
        next: node.next
      };
    }
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
};

function deleteNode(ll, position) {
  var count = 0;
  var node = ll._head;
  while(node.data !== null) {
    count++;
    if(count === position - 1) {
      node.next = {
        data: node.next.next.data,
        next: node.next.next.next
      };
    }
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

LinkedList.prototype.deleteNode = function (position) {
  var count = 0;
  var node = this._head;
  while(node.data !== null) {
    count++;
    if(count === position - 1) {
      node.next = {
        data: node.next.next.data,
        next: node.next.next.next
      };
    }
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
};

function printReverse(ll) {
  var node = ll._head;
  var dataList = [];
  while(node.data !== null) {
    dataList.push(node.data);
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  var reversed = dataList.reverse();
  for(var i = 0; i < reversed.length; i++) {
    console.log(reversed[i]);
  }
}

LinkedList.prototype.printReverse = function () {
  var node = this._head;
  var dataList = [];
  while(node.data !== null) {
    dataList.push(node.data);
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  var reversed = dataList.reverse();
  for(var i = 0; i < reversed.length; i++) {
    console.log(reversed[i]);
  }
};

function reverseLL(ll) {
  var node = ll._head;
  var dataList = [];
  while(node.data !== null) {
    dataList.push(node.data);
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  var reversed = dataList.reverse();
  node = ll._head;
  var count = 0;
  while(node.data !== null) {
    node.data = reversed[count];
    count++;
    if(node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

LinkedList.prototype.reverse = function () {
  if(this._head === null) {
    return null;
  }
  if(this._head.next === null) {
    return this._head;
  }
  var next = this._head.next;
  var prev = null;
  var curr = this._head;


  while(next !== null) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next.next;
  }

  curr.next = prev;
  this._head = curr;
};

var list = new LinkedList();

list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.add('f');
list.reverse();
debugger;
