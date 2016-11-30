var addTwoNumbers = function(l1, l2) {
  var firstArr = [];
  while (l1.next !== null) {
    firstArr.push(l1.val);
    l1 = l1.next;
  }
  firstArr.push(l1.val);

  var secondArr = [];
  while (l2.next !== null) {
    secondArr.push(l2.val);
    l2 = l2.next;
  }
  secondArr.push(l2.val);
  var firstNumber = Number(firstArr.reverse().join(''));
  var secondNumber = Number(secondArr.reverse().join(''));
  var sum = firstNumber + secondNumber;
  var retNum = sum.toString().split('').reverse();
  var retArr = retNum.map((val) => {
    return Number(val);
  });
  return retArr;
};

// their solution modified

var addTwoNumbers = function(l1, l2) {
  var dummyHead = new ListNode(0);
  var p = l1,
    q = l2,
    curr = dummyHead;
  var carry = 0;
  while (p !== null || q !== null) {
    var x = (p !== null) ? p.val : 0;
    var y = (q !== null) ? q.val : 0;
    var sum = carry + x + y;
    carry = sum / 10;
    curr.next = new ListNode(Math.floor(sum % 10));
    curr = curr.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }
  // if(carry > 0) {
  //     curr.next = new ListNode(carry);
  // }
  return dummyHead.next;
};
