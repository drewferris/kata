function mergeStrings(a, b) {
  var aArr = a.split('');
  var bArr = b.split('');
  var arr = [];
  for(var i = 0, j = 0; i < aArr.length, j < bArr.length; i++, j++) {
    if(aArr[i]) {
      var shift = aArr.shift();
      arr.push(shift);
      i--;
    }
    if(bArr[j]) {
      var shiftAgain = bArr.shift();
      arr.push(shiftAgain);
      j--;
    }
    debugger;
  }
  if(aArr.length !== 0) {
    for(var i = 0; i < aArr.length; i++) {
      arr.push(aArr[i]);
    }
  }
  if(bArr.length !== 0) {
    for(var i = 0; i < bArr.length; i++) {
      arr.push(bArr[i]);
    }
  }
  var final = arr.join('');
  return final;

}

mergeStrings('ab', 'zsd');
