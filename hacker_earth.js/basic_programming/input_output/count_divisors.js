function countDivisors(l,r,k) {
  var count = 0;
  for(var i = l; i <= r; i++) {
    if(i % k === 0) {
      count++;
    }
  }
  console.log(count);
}

countDivisors(1,10,1);
