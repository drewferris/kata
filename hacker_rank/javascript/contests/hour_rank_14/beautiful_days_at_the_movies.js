function beautifulDays(a, b, k) {
  var count = 0;
  for(var i = a; i <= b; i++) {
    var reversed = Number(i.toString().split('').reverse().join(''));
    if(Math.abs(reversed - i) % k === 0) {
      count++;
    }
  }
  console.log(count);
}

beautifulDays(20, 23, 6);
