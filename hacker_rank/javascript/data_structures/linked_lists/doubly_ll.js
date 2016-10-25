var
  DoublyLinkedList = require('doubly-linked-list-js');

var
  list = new DoublyLinkedList();

list
  .add('a')
  .add('b')
  .add('c')
  .add('e')
  .add('f');



function addSorted(list, data) {
  var n = {
    data: data,
    next: null,
    prev: null
  }

  if (list._head === null) {
    return n;
  }
  var node = list._head;

  if (node.data > data) {
    n.next = node;
    node.prev = n;
    return n;
  }

  var temp = node;

  while (temp.next !== null) {
    if (temp.next.data > data) {
      n.next = temp.next;
      n.prev = temp.next.prev;
      temp.next = n;
      n.next.prev = n;
      return node;
    }
    temp = temp.next;
  }
  temp.next = n;
  n.prev = temp;
  return node;
}

function reverse(list) {
  var node = list._head;
  if (node === null) {
    return null;
  }

  if (node.next === null) {
    return node;
  }

  var temp = node;
  var next = temp.next;
  while (next !== null) {
    temp.next = temp.prev;
    temp.prev = next;
    temp = next;
    next = next.next;
  }

  temp.next = temp.prev;
  temp.prev = null;

}
debugger;
