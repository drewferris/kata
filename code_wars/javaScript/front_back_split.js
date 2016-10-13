function frontBackSplit(source, front, back) {
  if (source === null && front === null && back === null) {
    throw new error;
  }
  if (source === null) throw new error;
  if (front === null) throw new error;
  if (source.next === null) throw new error;

  var count = 0;

  function getDepth(ll) {
    if (ll !== null) {
      count++;
      getDepth(ll.next);
    } else {
      return;
    }
  }
  console.log(source);
  var half;
  var counter = 0;
  front = source;

  function sort(first) {
    counter++;
    if (first !== null) {
      if (counter !== half) {
        sort(first.next);
      } else {
        first.next = null;
        return first;
      }
    } else {
      return;
    }
  }
  var backCount = 0;

  function sortBack(ll, second) {
    backCount++;
    if (ll !== null) {
      if (backCount !== half) {
        sortBack(ll.next, second);
      } else if (backCount === half) {
        second.data = ll.next.data;
        second.next = ll.next.next;
        return second;
      }
    } else {
      return;
    }
  }
  getDepth(source);
  half = Math.ceil(count / 2);
  sortBack(source, back);
  sort(front);

  console.log('front', front);
  console.log('back', back);



  // Your code goes here.
}
