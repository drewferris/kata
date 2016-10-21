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

LinkedList.prototype.print = function () {
  if(this._head === null) {
    return;
  }
  var currentNode = this._head;
  while(currentNode.data !== null) {
    console.log(currentNode.data);
    if(currentNode.next !== null) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
};

var list = new LinkedList();

list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.add('f');
list.print();

debugger;
