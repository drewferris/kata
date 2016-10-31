function maxXOR(L, R) {
  var max = 0;
  for(var i = L; i <= R; i++) {
    for(var j = L; j <= R; j++) {
      if((i ^ j) > max) {
        max = (i ^ j);
      }
    }
  }
  console.log(max);
}

maxXOR(10, 15);
