function iqTest(numbers) {
  var arr = numbers.split(' ');
  var final = [];
  var oddCount = 0;
  var evenCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
    }
    if (arr[i] % 2 === 0) {
      evenCount++;
    }
  }
  if (oddCount > evenCount) {
    for (var k = 0; k < arr.length; k++) {
      if (arr[k] % 2 === 0) final.push(k + 1);
    }
  }
  if(oddCount < evenCount) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] % 2 !== 0) final.push(j + 1);
    }
  }
  return final[0];
}
