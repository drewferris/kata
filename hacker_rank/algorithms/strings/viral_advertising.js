function viralAd(number) {
  var count = 0;
  var m;
  var advertisedTo;
  var nextTotal = 0;
  for(var i = 0; i < number; i++) {
    debugger;
    if(i === 0) {
      m = 5;
    } else {
      m = nextTotal;
    }
    advertisedTo = Math.floor(m/2);
    count += advertisedTo;
    nextTotal = advertisedTo * 3;
  }
  console.log(count);
}

console.log(viralAd(3));
console.log('hek');
