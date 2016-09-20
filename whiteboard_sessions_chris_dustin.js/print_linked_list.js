// function LinkedList() {
//   this.head = null;
// }
//
// LinkedList.prototype.push = function(val) {
//   var node = {
//     value: val,
//     next: null
//   }
//   if (!this.head) {
//     this.head = node;
//   } else {
//     current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = node;
//   }
// };
//
// var sll = new LinkedList();
//
// //push node
// sll.push(2);
// sll.push(3);
// sll.push(4);
//
// //append tail to LinkedList

var ll = {
  val: 'a',
  next: {
    val: 'b',
    next: {
      val: 'c',
      next: {
        val: 'd',
        next: {
          val: 'e',
          next: {
            val: 'g',
            next: null
          }
        }
      }
    }
  }
};

function AppendLL(list, val) {
  var item = list
  var newItem = {
    val: val,
    next: null
  };

  while (item.next !== null) {
    item = item.next
  }
  item.next = newItem
  return list;
}
console.log('before', ll);

function addToPoint(list, val, pos) {
  var count = 0;
  var traverse = function(head) {
    console.log('count', count);
    if(head.next !== null) {
      count ++;
      if (count === pos) {
        var insert = {
          val: val,
          next: head.next
        };
        head.next = insert;
        traverse(head.next);
      } else {
        traverse(head.next);
      }
    }
  };
  traverse(list);
  return list;
}

// function deleteNode(list, pos) {
//   var count = 0;
//   var traverse = function(head) {
//     console.log('count', count);
//     if(head.next !== null) {
//       count ++;
//       if (count === pos - 1) {
//         head = head.next;
//         traverse(head);
//       } else {
//         traverse(head.next);
//       }
//     }
//   };
//   traverse(list);
//   return list;
// }
function deleteNode(list, pos) {
  var count = 0;
  while(list.next !== null) {
    count ++;
    if (count === pos) {
      console.log(count, 'count');
    }
  }
}

deleteNode(ll, 1);

console.log('after', ll);
