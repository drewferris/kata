function appendNDelete(s,t,k) {
  if(s.length + t.length <= k) {
    console.log('Yes');
    return;
  }
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if(s[i] === t[i]) {
      count++;
    } else {
      break;
    }
  }
  var remainingS = s.length - count;
  var remainingT = t.length - count;
  if(remainingT + remainingS === k) {
    console.log('Yes');
    return;
  }
  if((k - (remainingS + remainingT)) % 2 === 0) {
    console.log('Yes');
    return;
  }
  console.log('No');
}

appendNDelete('aba', 'aba', 7);
