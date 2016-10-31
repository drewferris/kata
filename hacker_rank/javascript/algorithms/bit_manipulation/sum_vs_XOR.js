

function bitWiseXOR(n) {
  var count = 0;
  for(var i = 0; i <= n; i++) {
    if(n + i === (n ^ i)) {
      count++;
    }
  }
  console.log(count);
}

bitWiseXOR(5);
