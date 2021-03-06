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
  if (ll._head === null) {
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
  if (ll._head === null) {
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

LinkedList.prototype.insertToHead = function(data) {
  if (this._head === null) {
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
  while (node.data !== null) {
    count++;
    if (count === position - 1) {
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

LinkedList.prototype.insertNode = function(data, position) {
  var count = 0;
  var node = this._head;
  while (node.data !== null) {
    count++;
    if (count === position - 1) {
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
};

function deleteNode(ll, position) {
  var count = 0;
  var node = ll._head;
  while (node.data !== null) {
    count++;
    if (count === position - 1) {
      node.next = {
        data: node.next.next.data,
        next: node.next.next.next
      };
    }
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

LinkedList.prototype.deleteNode = function(position) {
  var count = 0;
  var node = this._head;
  while (node.data !== null) {
    count++;
    if (count === position - 1) {
      node.next = {
        data: node.next.next.data,
        next: node.next.next.next
      };
    }
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
};

function printReverse(ll) {
  var node = ll._head;
  var dataList = [];
  while (node.data !== null) {
    dataList.push(node.data);
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  var reversed = dataList.reverse();
  for (var i = 0; i < reversed.length; i++) {
    console.log(reversed[i]);
  }
}

LinkedList.prototype.printReverse = function() {
  var node = this._head;
  var dataList = [];
  while (node.data !== null) {
    dataList.push(node.data);
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  var reversed = dataList.reverse();
  for (var i = 0; i < reversed.length; i++) {
    console.log(reversed[i]);
  }
};

function reverseLL(ll) {
  var node = ll._head;
  var dataList = [];
  while (node.data !== null) {
    dataList.push(node.data);
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  var reversed = dataList.reverse();
  node = ll._head;
  var count = 0;
  while (node.data !== null) {
    node.data = reversed[count];
    count++;
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

LinkedList.prototype.reverse = function() {
  if (this._head === null) {
    return null;
  }
  if (this._head.next === null) {
    return this._head;
  }
  var next = this._head.next;
  var prev = null;
  var curr = this._head;


  while (next !== null) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next.next;
  }

  curr.next = prev;
  this._head = curr;
};

function compare(ll1, ll2) {
  var node1 = ll1._head;
  var node2 = ll2._head;

  while (node1.data !== null && node2.data !== null) {
    if (node1.data !== node2.data) {
      return false;
    }
    if (node1.next !== null && node2.next !== null) {
      node1 = node1.next;
      node2 = node2.next;
    } else {
      break;
    }
  }
  if (node1.next !== null || node2.next !== null) return false;
  return true;
}

LinkedList.prototype.compare = function(list) {
  var node1 = this._head;
  var node2 = list._head;

  while (node1.data !== null && node2.data !== null) {
    if (node1.data !== node2.data) {
      return false;
    }
    if (node1.next !== null && node2.next !== null) {
      node1 = node1.next;
      node2 = node2.next;
    } else {
      break;
    }
  }
  if (node1.next !== null || node2.next !== null) return false;
  return true;
};

function merge(ll1, ll2) {
  var node1 = ll1._head;
  var node2 = ll2._head;
  var count = 0;
  var mergeArr = [];

  while (node1.data !== null && node2.data !== null) {
    mergeArr.push(node1.data, node2.data);
    if (node1.next !== null && node2.next !== null) {
      node1 = node1.next;
      node2 = node2.next;
    } else {
      break;
    }
  }
  var returnList = {
    _head: {
      data: mergeArr.shift(),
      next: null
    }
  };
  var node = returnList._head;
  while (mergeArr.length !== 0) {
    node.next = {
      data: mergeArr.shift(),
      next: null
    };
    node = node.next;
  }
  return returnList;
}

function mergeProper(list1, list2) {
  var node1 = list1._head;
  var node2 = list2._head;
  var dummy = {
    data: 0,
    next: 0
  };

  var temp = dummy;

  while (temp.next !== null) {
    if (node1 === null) {
      temp.next = node2;
      break;
    } else if (node2 === null) {
      temp.next = node1;
      break;
    } else if (node1.data < node2.data) {
      temp.next = node1;
      node1 = node1.next;
    } else {
      temp.next = node2;
      node2 = node2.next;
    }
    temp = temp.next;
  }
  return dummy.next;
}

function getNode(list, k) {
  var node = list._head;
  var valArr = [];
  while (node.data !== null) {
    valArr.push(node.data);
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
  return valArr[valArr.length - 1 - k];
}

function getNodeAgain(list, k) {
  var node = list._head;
  if (node.next === null) {
    return node.data;
  }
  var count = 0;
  while (node !== null) {
    count++;
    node = node.next;
  }

  var n = count - k - 1;
  node = list._head;
  while (n > 0) {
    n--;
    node = node.next;
  }
  return node.data;
}

function deleteDup(list) {
  var node = list._head;
  var nodeArr = [];
  while (node.next !== null) {
    if (nodeArr.indexOf(node.next.data) === -1) {
      nodeArr.push(node.next.data);
    } else if (nodeArr.indexOf(node.next.data) !== -1) {
      node.next = {
        data: node.next.next.data,
        next: node.next.next.next
      };
    }
    if (node.next !== null) {
      node = node.next;
    } else {
      break;
    }
  }
}

function deleteProp(list) {
  if (list._head === null) {
    return null;
  }

  var node = list._head;
  var temp = node.next;
  var prev = node;
  while (temp !== null) {
    debugger;
    if (prev.data === temp.data) {
      prev.next = temp.next;
      temp.next = null;
      temp = prev.next;
    } else {
      prev = temp;
      temp = temp.next;
    }
  }
  return list;
}

function detectLoop(list) {
  var slow = list._head;
  var fast = list._head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function findMergePoint(list1, list2) {
  var node1 = list1._head;
  var node2 = list2._head;

  while (node1.next !== null && node2.next !== null) {
    if (node1.data === node2.data) {
      return node1.data;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
}

function findMergePointProper(list1, list2) {
  var node1 = list1._head;
  var node2 = list2._head;

  var countA = 0;
  var countB = 0;

  while (node1 != null) {
    countA++;
    node1 = node1.next;
  }

  while (node2 != null) {
    countB++;
    node2 = node2.next;
  }

  var diff = 0;

  if(countA>countB) {
    diff=countA-countB;
  } else {
    diff=countB-countA;
  }

  node1 = list1._head;
  node2 = list2._head;

  if(countA > countB) {
    while(diff > 0) {
      node1 = node1.next;
      diff--;
    }
  } else {
    while(diff>0) {
      node2 = node2.next;
      diff--;
    }
  }

  while(node1 !== null && node2 !== null) {
    node1 = node1.next;
    node2 = node2.next;
    if(node1.data === node2.data) {
      return node1.data;
    }
  }
  return 0;
}

var list = new LinkedList();
var list2 = new LinkedList();


list.add('c');
list2.add('h');
list.add('x');
list.add('y');
list.add('z');

list2.add('g');
list2.add('h');
list2.add('u');
list2.add('x');
list2.add('y');
list2.add('z');

findMergePointProper(list, list2);
debugger;
